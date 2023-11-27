import { writable } from "svelte/store";

type Image = { url: string; prompt: string };

// We use "0" to make sure JSON.parse doesn't error if there isn't an item in storage at "images". It defaults to an empty list
export const images = writable<Image[]>(
  JSON.parse(localStorage.getItem("images") || "0") || []
);

images.subscribe((images) => {
  localStorage.setItem("images", JSON.stringify(images));
});

export function addImage(url: string, prompt: string) {
  images.update((images) => [...images, { url, prompt }]);
}

export function removeImage(url: string) {
  images.update((images) => images.filter((image) => image.url !== url));
}
