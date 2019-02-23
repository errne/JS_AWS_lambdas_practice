'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.createOneClient = function(event, context, callback){
  const address = {
    "address1": event.address.address1,
    "address2": event.address.address2,
    "address3": event.address.address3,
    "address4": event.address.address4
  };
  const projects = {
    "active50":event.projects.active50,
    "counselling":event.projects.counselling,
    "grouptherapy":event.projects.grouptherapy,
    "toddler":event.projects.toddler,
    "survivors":event.projects.survivors,
    "personaldevelopment":event.projects.personaldevelopment,
    "leithcafe":event.projects.leithcafe,
    "smart":event.projects.smart,
    "other":event.projects.other
  };
  const params = {
    Item :
    {
      "id" : uuid.v1(),
      "title":event.title,
      "surname":event.surname,
      "forename":event.forename,
      "dob":event.dob,
      "gp":event.gp,
      "email":event.email,
      "phone":event.phone,
      "address":address,
      "projects": projects,
      "employment":event.employment,
      "leavemessage":event.leavemessage,
      "fromfeniks":event.fromfeniks,
      "mailing":event.mailing,
      "hear":event.hear
    },
    TableName : process.env.TABLE_NAME
  };
  ddb.put(params, function(err, data){
    callback(err, data);
  });
}