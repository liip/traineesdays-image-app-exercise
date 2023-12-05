import express from "express";
import { networkInterfaces } from "os";
import { readFileSync } from "fs";
import "dotenv/config";

const PORT = 3002;

const nets = networkInterfaces();
const results = Object.create(null);

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
    // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
    const familyV4Value = typeof net.family === "string" ? "IPv4" : 4;
    if (net.family === familyV4Value && !net.internal) {
      if (!results[name]) {
        results[name] = [];
      }
      results[name].push(net.address);
    }
  }
}

// The first result is the actual ip of the machine
const ip = Object.values(results)[0][0];

const indexHtml = readFileSync("src/index.html")
  .toString()
  .replace("%IP-HERE%", ip);

const secrets = {
  token: process.env["OPENAI_API_TOKEN"],
  organization: process.env["OPENAI_API_ORGANIZATION"],
};

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.send(indexHtml);
});

app.get("/api-key", (request, response) => {
  response.send(
    `${secrets.token}</br>${secrets.organization}`
  );
});

app.listen(PORT, () => {
  console.log(`Server Listening at http://${ip}:${PORT}`);
});
