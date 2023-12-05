import { writable } from "svelte/store";
import OpenAI from "openai";
import { OPENAI_API_KEY, OPENAI_ORGANIZATION } from "./env";

export const error = writable<any>(null);

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  organization: OPENAI_ORGANIZATION,
  dangerouslyAllowBrowser: true,
});

const model = "dall-e-3";
const quality = "hd";
const size = 1024;

export async function generate(prompt: string, amount?: 1): Promise<string>;
export async function generate(
  prompt: string,
  amount?: number
): Promise<string[]>;
export async function generate(prompt: string, amount: number = 1) {
  if (amount < 1) amount = 1;
  if (amount > 4) amount = 4;

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
  }

  return isOne ? "" : [];
}
