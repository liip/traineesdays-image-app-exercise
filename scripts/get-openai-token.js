import { writeFileSync, existsSync } from "fs";

if (existsSync("src/env.js")) process.exit(0);

const [, , urlString] = process.argv;

const isProperUrl = /https?:\/\/.*/.test(urlString);

if (!isProperUrl) {
  console.log(`Du hast dich wahrscheinlich verschrieben.`);
  process.exit(1);
}

const response = fetch(`${urlString}/api-key`).catch(() => {
  console.log(
    "Etwas ist schief gelaufen. Frag jemand von der Liip nach Hilfe."
  );
  process.exit(1);
});

const { token, organization } = await (await response).json();

const envFile = `export const OPENAI_API_KEY = "${token}"; export const OPENAI_ORGANIZATION = "${organization}";`;

writeFileSync("src/env.js", envFile);

export {};
