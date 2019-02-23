'use strict';

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.updateClient = function(event, context, callback){
  // TODO: map all the objects 
	const id = event.id;
	const params = {
		TableName : process.env.TABLE_NAME,
		Key: {
		 "id": id
		},

		UpdateExpression: "set forename = :f, surname = :s, title = :t, dob = :d, gp = :g",
		ExpressionAttributeValues: {
			":f": event.forename,
			":s": event.surname,
			":t": event.title,
			":d": event.dob,
			":g": event.gp,
		},
		ReturnValues:"UPDATED_NEW"



	};
	ddb.update(params, function(err, data){
		if(err){
			console.log("Error", err)
		    callback(err, null);
		}else{
		    callback(null, data.Item);
		}
	});
}
