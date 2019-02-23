'use strict';

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.deleteClient = function (event, context, callback) {
	const params = {
		TableName: process.env.TABLE_NAME,
		Key: { "id": event.id }
	};
	ddb.delete(params, function (err, data) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, data.Item);
		}
	});
}
