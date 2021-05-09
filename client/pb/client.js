const services = require("../server/proto/greet_grpc_pb");
const greets = require("../server/proto/greet_pb");

const grpc = require("grpc");

function main() {
  console.log("클라이언트 시작");

  const client = new services.GreetServiceClient(
    "localhost:8000",
    grpc.credentials.createInsecure(),
  );

  const req = new greets.GreetRequest();
  const greeting = new greets.Greeting();
  greeting.setFirstName("재천");
  greeting.setLastName("송");

  req.setGereeting(greeting);
  client.greet(req, (error, response) => {
    if (error) {
      console.error();
    } else {
      console.log(`reponse: ${response.getResult()}`);
    }
  });

  console.log(`client:  ${client}`);
}

main();
