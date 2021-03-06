'use strict';

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.getOneClient = function(event, context, callback){
  const params = {
    TableName : process.env.TABLE_NAME,
    Key: { "id": event.id }
  };
  ddb.get(params, function(err, data){
    if(err){
      callback(err, null);
    }else{
      callback(null, data.Item);
    }
  });
}
