const greets = require("../../server/protos/greet_pb");
const service = require("../../server/protos/greet_grpc_pb");
const grpc = require("grpc");

function callGreetManyTimes() {
  const client = new service.GreetServiceClient(
    "localhost:8000",
    grpc.credentials.createInsecure(),
  );

  const greeting = new greets.Greeting();
  greeting.setFirstName("재천");
  greeting.setLastName("송");

  const request = new greets.GreetManyTimeRequest();
  request.setGreet(greeting);

  const call = client.greetManyTimes(request, () => {});
  call.on("data", (response) => {
    console.log("클라 스트리밍", response.getResult());
  });
  call.on("status", (status) => {
    console.log(status);
  });
  call.on("error", (error) => {
    console.error(error);
  });
  call.on("end", () => {
    console.log("end");
  });
}

function main() {
  callGreetManyTimes();
}

main();
