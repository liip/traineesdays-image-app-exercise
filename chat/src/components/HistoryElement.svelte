<script lang="ts">
  import { marked } from "marked";
  import { hljs } from "../hljs";
  import { tick } from "svelte";

  export let data: any;

  $: ({ role, content } = data);
  $: parsedContent = marked.parse(content);

  const highlight = async (_content: any) => {
    await tick();
    const blocks = document.querySelectorAll("pre code");
    blocks.forEach((block) => {
      block.className = "language-svelte hljs";
      hljs.highlightBlock(block as HTMLElement);
    });

    document
      .querySelectorAll("code:not(pre code)")
      .forEach((block) => block.classList.add("hljs", "hljs-string"));
  };

  $: highlight(parsedContent);

  $: roleText = ((role: string) => {
    console.log(role);
    switch (role) {
      case "liip":
        return "liip";
      case "user":
        return "frage";
      case "assistant":
        return "antwort";
    }
  })(role);
</script>

<div>
  <h2 class="role {role}">{roleText}</h2>
  <div class="content">{@html parsedContent}</div>
</div>

<style>
  .role {
    padding: 0.5rem 0 0.25rem 0;
    text-transform: uppercase;
  }
</style>
