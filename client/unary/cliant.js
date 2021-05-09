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

const client = new greetPackageDefinition.GreetService(
  "localhost:8000",
  grpc.credentials.createInsecure(),
);

function callGreetings() {
  const request = {
    greeting: {
      first_name: "재천",
      last_name: "송",
    },
  };
  client.greet(request, (error, response) => {
    if (error) {
      console.log(error);
      return 0;
    }

    console.log(response.result);
  });
}

function main() {
  callGreetings();
}

main();
