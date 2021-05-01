const grpc = require("grpc");

function main() {
  const server = new grpc.Server();

  server.bind("127.0.0.1:8000", grpc.ServerCredentials.createInsecure());
  server.start();

  console.log("서버시작");
}

main();
