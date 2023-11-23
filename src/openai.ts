import { writable } from "svelte/store";

export const error = writable<any>(null);

import { OPENAI_API_KEY, OPENAI_ORGANIZATION } from "./env";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  organization: OPENAI_ORGANIZATION,
  dangerouslyAllowBrowser: true,
});

const model = "dall-e-2";
const quality = "hd";
const size = 1024;

type twoToTen = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type one = 1;
type oneToTen = one | twoToTen;

export async function generate(prompt: string, amount?: 1): Promise<string>;
export async function generate(
  prompt: string,
  amount?: twoToTen
): Promise<string[]>;
export async function generate(prompt: string, amount: oneToTen = 1) {
  if (amount < 1) amount = 1;
  if (amount > 10) amount = 10;

  const isOne = amount === 1;

  if (!prompt) return isOne ? "" : [];

  try {
    const response = await openai.images.generate({
      prompt,
      model,
      quality,
      n: amount,
      size: `${size}x${size}`,
    });
    return (
      (isOne
        ? response.data[0].url
        : response.data.map(({ url }) => url || "").filter(Boolean)) ||
      (isOne ? "" : [])
    );
  } catch (e) {
    error.set(e);

    return isOne ? "" : [];
  }
}
