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

    document
      .querySelectorAll("code:not(pre code)")
      .forEach((block) => (block.className = "hljs hljs-string"));

    document
      .querySelectorAll("details summary")
      .forEach((block) => (block.className = "hljs-keyword"));

    // document.querySelectorAll(".solution").forEach((block) => block.remove());
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
