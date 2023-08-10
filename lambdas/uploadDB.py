import boto3
import json
import requests
from datetime import datetime
from boto3.dynamodb.conditions import Key, Attr
from opensearchpy import OpenSearch, RequestsHttpConnection

access_key = "***************"
secret_key = "*****************************"
session=boto3.Session(aws_access_key_id=access_key,aws_secret_access_key=secret_key, region_name='us-east-1')
client_dynamo=session.resource('dynamodb')
table=client_dynamo.Table('Todo-k7i42s4bp5a4xj4bokrdjuvcke-dev')
records=""
host = 'search-recipes-qyl7etdldxu37ur7ouh5mztrtq.us-east-1.es.amazonaws.com'
region = 'us-east-1'
service = "es"

es = OpenSearch(hosts = [{'host': host, 'port': 443}],
                           http_auth = ("admin","Cloudproject@1"), use_ssl = True, connection_class = RequestsHttpConnection)
                           
date = datetime.today().strftime('%m/%d/%Y')

def searchElasticIndex(search):
    recipes = []
    if len(search) > 0:
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
    
    
    if "Records" in event:
    
        # sqs = boto3.resource('sqs')
    
        # # Get the queue
        # queue = sqs.get_queue_by_name(QueueName='ingredients')
        
        # messages = queue.receive_messages(MaxNumberOfMessages=10)
        # print(messages)
        
        # # Process messages by printing out body and optional author name
        # for message in queue.receive_messages(MaxNumberOfMessages=10):
        #     body = json.loads(message.body)
        #     print(body)
        #     if "userId" in body:
        #         event = body
        for record in event['Records']:
            event = json.loads(record['body'])
            print(event)
            d = {}
            print("event is:  ",)
            ings = event["ingredients"]
            exps = event["expiries"]
            print(ings)
            print(exps)
            d["userId"] = event["userId"]
            for i in range(len(ings)):
                d[ings[i]] = exps[i]
                
            response = table.scan(FilterExpression=Attr('id').eq(d["userId"]))
            data = response['Items'][0]
            email = data['email']
            
            print(data)
            print("ingredients" in data)
                
            ingredients = []
            expiry = []
            if "ingredients" in data and "expiry" in data:
                ingredients = data['ingredients'] 
                expiry = data['expiry'] 
                print(len(ingredients))
                length = len(ingredients)
                i = 0
                while(i<length):
                    if ingredients[i] in event["ingredients"] : 
                        del ingredients[i] 
                        del expiry[i]
                        length = len(ingredients)
                    i+=1
                        
                ingredients   = ingredients + event['ingredients'] 
                expiry = expiry + event['expiries']
                table.update_item(
                        Key={'id': d["userId"]},
                        UpdateExpression='SET ingredients = :val1,expiry = :val2',
                        ExpressionAttributeValues={
                            ':val1': ingredients,
                            ':val2': expiry
                        }
                    )
            else:
                 ingredients = ings
                 expiry = expiry
                 table.update_item(
                        Key={'id': d["userId"]},
                        UpdateExpression='SET ingredients = :val1,expiry = :val2',
                        ExpressionAttributeValues={
                            ':val1': ings,
                            ':val2': exps
                        }
                    )
            expired_ingredients = []
            k = 1
            for i in range(len(expiry)):
                if expiry[i] == date:
                    expired_ingredients.append(str(k) +". "+ ingredients[i].capitalize())
                    k+=1
            if len(expired_ingredients) != 0 :
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
            print("ingredients:" + str(ingredients))
            print("expiry:" + str(expiry))
            print("added to dynamo db")
                
            
    