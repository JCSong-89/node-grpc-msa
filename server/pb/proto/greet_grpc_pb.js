// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_greet_pb = require('../proto/greet_pb.js');

function serialize_greet_GreetRequest(arg) {
  if (!(arg instanceof proto_greet_pb.GreetRequest)) {
    throw new Error('Expected argument of type greet.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetRequest(buffer_arg) {
  return proto_greet_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetRespone(arg) {
  if (!(arg instanceof proto_greet_pb.GreetRespone)) {
    throw new Error('Expected argument of type greet.GreetRespone');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetRespone(buffer_arg) {
  return proto_greet_pb.GreetRespone.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetServiceService = exports.GreetServiceService = {
  greet: {
    path: '/greet.GreetService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: proto_greet_pb.GreetRequest,
    responseType: proto_greet_pb.GreetRespone,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetRespone,
    responseDeserialize: deserialize_greet_GreetRespone,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
