import json
import boto3


def lambda_handler(event, context):
    print(event)
    access_key = "*****************"
    secret_key = "****************************"
    session=boto3.Session(aws_access_key_id=access_key,aws_secret_access_key=secret_key, region_name='us-east-1')
    dynamo=session.resource('dynamodb')
    table = dynamo.Table('Todo-k7i42s4bp5a4xj4bokrdjuvcke-dev')
    response = table.get_item(
    Key={
        'id': event['userId'].strip()
    })
    print(response)
    l = [i.capitalize() for i in set(response['Item']["ingredients"])]
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers' : 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'

        },
        "text":l
    }
