<script lang="ts">
  import { generate, error } from "./openai";
  import { images, removeImage } from "./gallery";
  import { loading } from "./stores";

  let prompt = "Ein Wald mit einem Haus aus Beton.";
</script>

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
    on:click={() => generate(prompt)}
  >
    Generate
  </button>
</form>

{#each $images as { url, prompt }}
  <div class="image-container">
    <img
      class="image"
      src={url}
      alt={prompt}
    />
    <button
      class="delete-button"
      on:click={() => removeImage(url)}
    >
      Löschen
    </button>
  </div>
{/each}

{#if $error}
  <h2 class="error">Error {$error.status}</h2>
  <p>{$error.error.message} <strong>({$error.error.type})</strong></p>
{/if}

<style>
  .prompt-input {
    /* Deine Eigenschaften hier. */
  }

  .submit-button {
    /* Deine Eigenschaften hier. */
  }

  .image {
    /* Deine Eigenschaften hier. */
  }

  .image-container {
    /* Deine Eigenschaften hier. */
  }

  .delete-button {
    /* Deine Eigenschaften hier. */
  }
</style>
