from expert_belt_api.models import Tournament, Organizer
import environ
import os
from pathlib import Path

from urllib.request import urlopen

import boto3

env = environ.Env()
BASE_DIR = Path(__file__).resolve().parent.parent.parent
environ.Env.read_env(os.path.join(BASE_DIR.parent, ".env"))


client = boto3.client(
    "dynamodb",
    region_name="us-east-1",
    aws_access_key_id=env("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=env("AWS_SECRET_ACCESS_KEY"),
)

dynamodb = boto3.resource(
    "dynamodb",
    region_name="us-east-1",
    aws_access_key_id=env("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=env("AWS_SECRET_ACCESS_KEY"),
)

ddb_exceptions = client.exceptions


def create_vgcdata_table():
    try:
        table = client.create_table(
            TableName="VGCDATA",
            KeySchema=[{"AttributeName": "timestamp", "KeyType": "HASH"}],
            AttributeDefinitions=[{"AttributeName": "timestamp", "AttributeType": "N"}],
            ProvisionedThroughput={"ReadCapacityUnits": 10, "WriteCapacityUnits": 10},
        )
        print("Creating table")
        waiter = client.get_waiter("table_exists")
        waiter.wait(TableName="VGCDATA")
        print("Table created")

    except ddb_exceptions.ResourceInUseException:
        print("Table exists")


def import_teams_to_dynamodb(tournaments=[]):
    create_vgcdata_table()
