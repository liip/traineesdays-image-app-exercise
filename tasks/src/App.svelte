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

  :global(h1, h2, h3, h4, h5, h6) {
    text-decoration: underline;
    margin: 1rem 0;
  }

  :global(p) {
    margin: 0.5rem 0;
  }

  :global(pre) {
    overflow-y: scroll;
  }

  :global(code:not(pre code)) {
    margin: 0 0.1rem;
    border-radius: 0.3rem;
  }

  :global(code:not(pre code)::before) {
    content: "`";
  }

  :global(code:not(pre code)::after) {
    content: "`";
  }

  :global(pre code) {
    border-radius: 0.3rem;
    padding: 0.5rem !important;
  }

  :global(details summary) {
    list-style-type: none;
  }

  :global(details summary::before) {
    content: "▶️";
    display: inline-block;
    transition: rotate 300ms ease-in-out;
  }

  :global(details[open] summary::before) {
    display: inline-block;
    rotate: 90deg;
  }

  :global(details summary) {
    font-weight: bold;
    user-select: none;
    cursor: pointer;
  }

  :global(details) {
    padding: 0.5rem;
  }

  :global(details[open] > summary) {
    position: initial;
  }

  :global(details[open]) {
    position: relative;
  }

  :global(details[open]::before) {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0.15rem;
    background: black;
    border-radius: 0.15rem;
  }
</style>
