const path = require("path");
const protoLoader = require("@grpc/proto-loader");
const grpc = require("grpc");

const greetProtoPath = path.join(__dirname, "../..", "protos", "greet.proto");
const greetProtoDefinition = protoLoader.loadSync(greetProtoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const greetPackageDefinition = grpc.loadPackageDefinition(greetProtoDefinition)
  .greet;

function greet(call, callback) {
  console.log(call.request);
  const firstName = call.request.greeting.first_name;
  const lastName = call.request.greeting.last_name;

  callback(null, {
    result: `hello ${firstName}${lastName}`,
  });
}

function main() {
  const server = new grpc.Server();

  server.addService(greetPackageDefinition.GreetService.service, {
    greet: greet,
  });

  server.bind("127.0.0.1:8000", grpc.ServerCredentials.createInsecure());
  server.start();
  console.log("Server Running");
}

main();
