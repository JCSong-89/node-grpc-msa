const greets = require("../protos/greet_pb");
const service = require("../protos/greet_grpc_pb");

const grpc = require("grpc");

function greet(call, callback) {
  const greeting = new greets.GreetRespone();

  greeting.setResult(
    `Hello ${call.request
      .getGreeting()
      .getLastName()} ${call.request.getGreeting().getFirstName()}`,
  );
}

function greetManyTimes(call, callback) {
  console.log(call);

  const firstName = call.request.getGreet().getFirstName();

  let count = 0;
  let intervalId = setInterval(() => {
    const greetManyTimesResponse = new greets.GreetManyTImeResponse();
    greetManyTimesResponse.setResult(`${firstName}${count}`);

    call.write(greetManyTimesResponse);

    if (++count > 9) {
      clearInterval(intervalId);
      call.end();
    }
  }, 1000);
}

function main() {
  const server = new grpc.Server();

  server.addService(service.GreetServiceService, {
    greet: greet,
    greetManyTimes: greetManyTimes,
  });
  server.bind("127.0.0.1:8000", grpc.ServerCredentials.createInsecure());
  server.start();

  console.log("서버시작");
  console.log(server);
}

main();
