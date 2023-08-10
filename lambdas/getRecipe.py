import json
import boto3
import requests
from opensearchpy import OpenSearch, RequestsHttpConnection
from aws_requests_auth.aws_auth import AWSRequestsAuth


host = 'search-recipes-qyl7etdldxu37ur7ouh5mztrtq.us-east-1.es.amazonaws.com'
access_key = "*****************"
secret_key = "******************************"
region = 'us-east-1'
service = "es"

es = OpenSearch(hosts = [{'host': host, 'port': 443}],
                           http_auth = ("admin","Cloudproject@1"), use_ssl = True, connection_class = RequestsHttpConnection)



def searchElasticIndex(search,cuisine):
    recipes = []
    q = search[0]
    if len(search)>1:
        for i in range(1,len(search)):
            q+=" and "+ search[i]
    print(q)
    res = es.search(index="recipe", size= 20, body={"query": {"match": {"ingredients": q},"match": {"cuisine": cuisine}}})
    for recipe in res["hits"]["hits"]:
        recipes.append(recipe)
    return recipes


def lambda_handler(event, context):
    print(event)
    ings = event["ingredients"]
    cuisine = event["cuisine"]
    print("the cuisine is: ",cuisine)
    search = ings.split(",")
    # TODO implement
    recipes = searchElasticIndex(search,cuisine)
    
    print(recipes)
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers' : 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'

        },
        'results': recipes
    }