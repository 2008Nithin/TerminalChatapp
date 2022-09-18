const prompt = require("prompt-sync")();
const io = require("socket.io-client");

let name = prompt("What is your name : ");

const socket = io("http://localhost:3000");

const readline = require("readline");

console.log("To message other people do /msg");
console.log("To quit to /quit");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  if (true === input.startsWith("/msg")) {
    let string = input.slice(4);
    socket.emit("send-message", { name: name, msg: string });
    console.log(`<Me> ${string}`);
  }
  if (true === input.startsWith("/quit")) {
    process.exit();
  }
});

socket.on("receive-message", (msg) => {
  console.log(`<${msg.name}> ${msg.msg}`);
});
