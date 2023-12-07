import { writable } from "svelte/store";
import OpenAI from "openai";
import { OPENAI_API_KEY, OPENAI_ORGANIZATION } from "./env";
import { loading } from "./stores";
import { addImage } from "./gallery";

export const error = writable<any>(null);

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  organization: OPENAI_ORGANIZATION,
  dangerouslyAllowBrowser: true,
});

const model = "dall-e-3";
const quality = "hd";
const size = 1024;

export async function generate(prompt: string) {
  const loadingState = await new Promise((resolve) =>
    loading.subscribe((loading) => resolve(loading))
  );

  if (!loadingState) return;

  loading.set(true);

  try {
    const response = await openai.images.generate({
      prompt,
      model,
      quality,
      size: `${size}x${size}`,
    });

    if (response.data[0].url) addImage(response.data[0].url, prompt);
  } catch (e) {
    error.set(e);
  }

  loading.set(false);
  return;
}
