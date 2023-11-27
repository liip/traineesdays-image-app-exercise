import { readable } from "svelte/store";
import { OPENAI_API_KEY, OPENAI_ORGANIZATION } from "../../../src/env";
import OpenAI from "openai";

export const openai = readable(
  new OpenAI({
    apiKey: OPENAI_API_KEY,
    organization: OPENAI_ORGANIZATION,
    dangerouslyAllowBrowser: true,
  }),
  (set) => {
    return () => {};
  }
);
