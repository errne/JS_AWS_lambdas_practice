'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.createOneClient = function(event, context, callback){

    const client = event;
    client["id"] = uuid.v1();
    const params = {
        Item: client,
		TableName : process.env.TABLE_NAME
	};
	ddb.put(params, function(err, data){
		callback(err, data);
	});
}
