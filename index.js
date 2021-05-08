const AWS = require('aws-sdk');
const  uuid  = require('uuid');

const docClient = new AWS.DynamoDB.DocumentClient();
const groupsTable = process.env.GROUPS_TABLE;

exports.handler = async (event) => {
    console.log('Processing event:', event);
    const itemId = uuid.v4();

    const parseBody = JSON.parse(event.body);

    const newItem = {
        id: itemId,
        ...parseBody
    };

    await docClient.put({
        TableName: groupsTable,
        Item: newItem
    }).promise();

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ newItem })
    };

}