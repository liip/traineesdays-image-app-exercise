import { writeFileSync, existsSync } from "fs";

if (existsSync("src/env.js")) process.exit(0);

const [, , ipString] = process.argv;

const isActualIp = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(
  ipString,
);

if (!isActualIp) {
  console.log(`Du hast dich wahrscheinlich verschrieben.`);
  process.exit(1);
}

const response = fetch(`http://${ipString}:3002/api-key`).catch(() => {
  console.log(
    "Etwas ist schief gelaufen. Frag jemand von der Liip nach Hilfe.",
  );
  process.exit(1);
});

const { token, organization } = await (await response).json();

const envFile = `export const OPENAI_API_KEY = "${token}"; export const OPENAI_ORGANIZATION = "${organization}";`;

writeFileSync("src/env.js", envFile);

export {};
