import boto3
import json
import requests
from datetime import datetime
from boto3.dynamodb.conditions import Key, Attr
from botocore.exceptions import ClientError
from opensearchpy import OpenSearch, RequestsHttpConnection

access_key = "**************"
secret_key = "***************************"
host = 'search-recipes-qyl7etdldxu37ur7ouh5mztrtq.us-east-1.es.amazonaws.com'
region = 'us-east-1'
service = "es"

es = OpenSearch(hosts = [{'host': host, 'port': 443}],
                           http_auth = ("admin","Cloudproject@1"), use_ssl = True, connection_class = RequestsHttpConnection)
                           
session=boto3.Session(aws_access_key_id=access_key,aws_secret_access_key=secret_key, region_name='us-east-1')
client_dynamo=session.resource('dynamodb')
table=client_dynamo.Table('Todo-k7i42s4bp5a4xj4bokrdjuvcke-dev')
records=""
date = datetime.today().strftime('%m/%d/%Y')

date1 = datetime.today()
def remove_expired_items():
    response = table.scan()
    data = response['Items']
    for item in data:
        if "expiry" in item and "ingredients" in item:
            expiry = item['expiry']
            ingredients = item['ingredients']
            length = len(expiry)
            i = 0
            while(i<length):
                d1 = datetime.strptime(expiry[i],"%m/%d/%Y")
                if d1 < date1:
                    del expiry[i]
                    del ingredients[i]
                    length = len(expiry)
                i+=1
            
            table.update_item(
                        Key={'id': item['id']},
                        UpdateExpression='SET ingredients = :val1,expiry = :val2',
                        ExpressionAttributeValues={
                            ':val1': ingredients,
                            ':val2': expiry
                        }
                    )
            
def searchElasticIndex(search):
    recipes = []
    q = search[0]
    if len(search)>1:
        for i in range(1,len(search)):
            q+=" and "+ search[i]
    print(q)
    res = es.search(index="recipe", size= 10, body={"query": {"match": {"ingredients": q}}})
    i = 1
    for recipe in res["hits"]["hits"]:
        recipes.append("Recipe:" + str(i) +": " + recipe['_source']['recipe_name'])
        i+=1
    return recipes
    
def lambda_handler(event, context):
    
    remove_expired_items()

    response=table.scan(FilterExpression=Attr('expiry').contains(date))
    #response = table.scan()
    data = response['Items']
    
    for item in data:
        email = item['email']
        expiry = item['expiry']
        ingredients = item['ingredients']
        expired_ingredients = []
        k = 1
        for i in range(len(expiry)):
            if expiry[i] == date:
                expired_ingredients.append(str(k) +". "+ ingredients[i].capitalize())
                k+=1
        if len(expired_ingredients)!=0:
            recipes = searchElasticIndex(expired_ingredients)
            SENDER = "bonappetit.food.recipes@gmail.com"
            RECIPIENT = email
            EMAIL_BODY = "\n".join(expired_ingredients)
            AWS_REGION = "us-east-1"
        
            # The email to send.
            SUBJECT = "The items in your pantry are expiring"
            BODY_TEXT = "The following items in your pantry are expiring today :\n" +  EMAIL_BODY + "\n\nOpen the Bon Appetit app and Try these recipes today!\n\n" + "\n".join(recipes) + "\n\n\n With Love,\n Bon Appetit"
            CHARSET = "UTF-8"
            client = boto3.client('ses',region_name=AWS_REGION)
            
            # Try to send the email.
            try:
                #Provide the contents of the email.
                response = client.send_email(
                    Destination={
                        'ToAddresses': [
                            RECIPIENT,
                        ],
                    },
                    Message={
                        'Body': {
        
                            'Text': {
                                'Charset': CHARSET,
                                'Data': BODY_TEXT,
                            },
                        },
                        'Subject': {
                            'Charset': CHARSET,
                            'Data': SUBJECT,
                        },
                    },
                    Source=SENDER,
                    
                )
            # Display an error if something goes wrong.	
            except ClientError as e:
                print(e.response['Error']['Message'])
            else:
                print("Email sent! Message ID:"),
                print(response['MessageId'])    

    return data

