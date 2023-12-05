const APP = `<script lang="ts">
  import { generate, error } from "./openai";
  import { addImage, images, removeImage } from "./gallery";

  let source = "";

  let prompt = "Eine siamesische Katze mit blauen Augen.";

  const handleGenerate = async () => {
    source = await generate(prompt);
  };
</script>

<div class="app">
  <form
    class="form"
    on:submit|preventDefault
  >
    <input
      class="prompt-input"
      type="text"
      bind:value={prompt}
      disabled
    />
    <button
      class="submit-button"
      on:click={handleGenerate}
    >
      Generate
    </button>
  </form>

  {#if source}
    <img
      class="image"
      src={source}
      alt=""
    />
  {/if}

  {#if $error}
    <h2 class="error">Error {$error.status}</h2>
    <p>{$error.error.message} <strong>({$error.error.type})</strong></p>
  {/if}
</div>

<style>
  .prompt-input {
    /* Deine Eigenschaften hier. */
  }

  .submit-button {
    /* Deine Eigenschaften hier. */
  }

  .image {
    width: 768px;
    border: 3px solid black;
    border-radius: 8px;
  }
</style>
`;export default APP;