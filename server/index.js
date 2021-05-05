const greets = require("../server/proto/greet_pb");
const service = require("../server/proto/greet_grpc_pb");

const grpc = require("grpc");

function greet(call, callback) {
  const greeting = new greets.GreetRespone();

  greeting.setResult(
    `Hello ${call.request
      .getGereeting()
      .getLastName()} ${call.request.getGereeting().getFirstName()}`,
  );

  callback(null, greeting);
}

function main() {
  const server = new grpc.Server();

  server.addService(service.GreetServiceService, { greet: greet });
  server.bind("127.0.0.1:8000", grpc.ServerCredentials.createInsecure());
  server.start();

  console.log("서버시작");
  console.log(server);
}

main();
