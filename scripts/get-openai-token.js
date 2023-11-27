import { writeFileSync, existsSync } from "fs";
import open from "open";
import readline from "readline";

// if (existsSync("src/env.js")) process.exit(0)

const [, , ipString] = process.argv;

const isActualIp = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(
  ipString
);

if (!isActualIp) {
  console.log(`Du hast dich wahrscheinlich verschrieben.`);
  process.exit(1);
}

await open(`http://${ipString}:3002/api-key`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { token, organization } = JSON.parse(
  await new Promise((resolve) =>
    rl.question("Hier einfügen: ", (contents) => resolve(contents))
  )
);

rl.close();

const envFile = `export const OPENAI_API_KEY = "${token}"; export const OPENAI_ORGANIZATION = "${organization}";`;

writeFileSync("src/env.js", envFile);

export {};
