<script lang="ts">
  import { generate, error } from "./openai";
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
  .custom-input {
    /* Deine Eigenschaften hier. */
  }

  .custom-button {
    /* Deine Eigenschaften hier. */
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    display: flex;
    width: 768px;
  }

  .prompt-input,
  .submit-button {
    padding: 8px;
    border: 3px solid black;
    border-radius: 8px;
  }

  .prompt-input {
    margin: 8px 0;
    width: 100%;
  }

  .submit-button {
    background: black;
    color: white;
    margin: 8px;
    margin-right: 0;
    cursor: pointer;
  }

  .submit-button:hover {
    background: white;
    color: black;
  }

  .image {
    width: 768px;
    border: 3px solid black;
    border-radius: 8px;
  }

  .error {
    color: red;
  }
</style>
