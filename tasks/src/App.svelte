<script lang="ts">
  import TASKS from "./TASKS";
  import { onMount } from "svelte";

  import "highlight.js/styles/github-dark-dimmed.css";
  import hljs from "highlight.js";
  // @ts-ignore
  import hljs_svelte from "highlightjs-svelte";

  hljs_svelte(hljs);

  onMount(() => {
    document
      .querySelectorAll("pre code")
      .forEach((block) => hljs.highlightBlock(block as HTMLElement));

    const { color: stringColor } = getComputedStyle(
      document.getElementsByClassName("hljs-string")[0]
    );

    document.querySelectorAll("code:not(pre code)").forEach((_block) => {
      const block = _block as HTMLElement;
      block.style.color = stringColor;
      block.classList.add("hljs");
    });

    const { color: keywordColor } = getComputedStyle(
      document.getElementsByClassName("hljs-keyword")[0]
    );

    document.querySelectorAll("details summary").forEach((_block) => {
      const block = _block as HTMLElement;
      block.style.color = keywordColor;
    });
  });
</script>

<div class="readme-wrapper">
  <div class="readme-container">{@html TASKS}</div>
</div>

<style>
  .readme-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .readme-container {
    width: calc(100vw - var(--margin) * 2);
  }
</style>
