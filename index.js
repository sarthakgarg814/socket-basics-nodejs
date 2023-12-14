const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.log(`Some Error Occured While Connecting to socket ${err.message}`);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.on("message", (msg, info) => {
  console.log(`Message Arrive: ${msg} from:- ${info.address}:${info.port}`);
});

server.bind(process.argv[2], "localhost");

process.stdin.on("data", (d) => {
  const msg = d.toString().trim();
  server.send(msg, process.argv[3]);
});
