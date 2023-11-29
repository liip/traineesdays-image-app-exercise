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
const size = 512;

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

export async function variate(image: string, amount?: 1): Promise<string>;
export async function variate(
  image: string,
  amount?: number
): Promise<string[]>;
export async function variate(
  image: string,
  amount: number = 1
): Promise<string | string[]> {
  if (amount < 1) amount = 1;
  if (amount > 4) amount = 4;

  const isOne = amount === 1;

  const imageResponse = await fetch(image);

  try {
    const response = await openai.images.createVariation({
      image: imageResponse,
      model: "dall-e-2",
      response_format: "url",
      size: `${size}x${size}`,
      n: amount,
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

// export async function modify(prompt: string, image: string): Promise<string> {
//   openai.images.edit({
//     image,
//     prompt,
//     model: "dall-e-2",
//     response_format: "url",
//     size: `${size}x${size}`,
//   });
//   return "";
// }
