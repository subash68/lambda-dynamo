const { randomUUID } = require("crypto")
const AWS = require('aws-sdk')

exports.handler = async function (event) {

    var uuid = randomUUID({ disableEntropyCache: true });
    var dbClient = new AWS.DynamoDB.DocumentClient()
    var params = {
        TableName: 'uuidTable',
        Item: {
            "uuid": uuid
        }
    };

    dbClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/json" },
        body: JSON.stringify({message: "UUID generated from server is : " + uuid})
    }
}