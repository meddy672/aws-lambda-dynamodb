# Overview
This code demostrates how to use [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) to connect to a [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html).

# How To Use
First, create a new lambda function, select a runtime of 10 or greater for Node.js, upload the zipfile in the repository, and deploy the lambda function. Next, you will need to create an environment variable for your lambda function which will reference the database table **GROUPS_TABLE**. Next, you can create an endpoint using [AWS API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) and connect the lambda function to the endpoint. The type of API Gateway you will need to create is a simple RESTFUL API service. Next, you will need to create a DynamoDB table to store you items. All basic configurations for the DynamoDB table are fine. Once you have your database setup, attach the **PutItem** policy associated with the database ARN to the execution role of the lambda function. Once you have your lambda function connected to you API Gateway and it has permissions to store item in the database, make sure that the API Gateway is deployed and the lambda function is deployed. If all is setup correctly you should be able to make request to the endpoint and create new groups.