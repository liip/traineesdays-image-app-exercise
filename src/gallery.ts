import { writable } from "svelte/store";

type Image = { url: string; prompt: string };

// We use "0" to make sure JSON.parse doesn't error if there isn't an item in storage at "images". It defaults to an empty list
const imagesFromLocalstorage =
  JSON.parse(localStorage.getItem("images") || "0") || [];

const oneHour = 1000 * 60 * 60;

const now = new Date();

export const images = writable<Image[]>(
  imagesFromLocalstorage.filter(
    ({ generatedAt }: any) =>
      new Date(generatedAt).getTime() + oneHour > now.getTime()
  )
);

images.subscribe((images) => {
  localStorage.setItem("images", JSON.stringify(images));
});

export function addImage(url: string | string[], prompt: string) {
  const now = new Date();
  images.update((images) => [
    ...images,
    ...(typeof url === "object"
      ? url.map((image) => ({ url: image, prompt, generatedAt: now }))
      : [{ url, prompt, generatedAt: now }]),
  ]);
}

export function removeImage(url: string) {
  images.update((images) => images.filter((image) => image.url !== url));
}
