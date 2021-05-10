// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("grpc");
var protos_greet_pb = require("../protos/greet_pb.js");

function serialize_greet_GreetManyTImeResponse(arg) {
  if (!(arg instanceof protos_greet_pb.GreetManyTImeResponse)) {
    throw new Error("Expected argument of type greet.GreetManyTImeResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetManyTImeResponse(buffer_arg) {
  return protos_greet_pb.GreetManyTImeResponse.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_greet_GreetManyTimeRequest(arg) {
  if (!(arg instanceof protos_greet_pb.GreetManyTimeRequest)) {
    throw new Error("Expected argument of type greet.GreetManyTimeRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetManyTimeRequest(buffer_arg) {
  return protos_greet_pb.GreetManyTimeRequest.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_greet_GreetRequest(arg) {
  if (!(arg instanceof protos_greet_pb.GreetRequest)) {
    throw new Error("Expected argument of type greet.GreetRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetRequest(buffer_arg) {
  return protos_greet_pb.GreetRequest.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_greet_GreetRespone(arg) {
  if (!(arg instanceof protos_greet_pb.GreetRespone)) {
    throw new Error("Expected argument of type greet.GreetRespone");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetRespone(buffer_arg) {
  return protos_greet_pb.GreetRespone.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

var GreetServiceService = (exports.GreetServiceService = {
  greet: {
    path: "/greet.GreetService/Greet",
    requestStream: false,
    responseStream: false,
    requestType: protos_greet_pb.GreetRequest,
    responseType: protos_greet_pb.GreetRespone,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetRespone,
    responseDeserialize: deserialize_greet_GreetRespone,
  },
  // stream
  greetManyTimes: {
    path: "/greet.GreetService/GreetManyTimes",
    requestStream: false,
    responseStream: true,
    requestType: protos_greet_pb.GreetManyTimeRequest,
    responseType: protos_greet_pb.GreetManyTImeResponse,
    requestSerialize: serialize_greet_GreetManyTimeRequest,
    requestDeserialize: deserialize_greet_GreetManyTimeRequest,
    responseSerialize: serialize_greet_GreetManyTImeResponse,
    responseDeserialize: deserialize_greet_GreetManyTImeResponse,
  },
});

exports.GreetServiceClient = grpc.makeGenericClientConstructor(
  GreetServiceService,
);
