<script lang="ts">
  import { input } from "../stores/input";
</script>

<input
  class="base input"
  type="text"
  bind:value={$input}
  placeholder="Svelte relevante Fragen & Fragen bezüglich den Aufgaben."
/>

<style>
  .input {
    width: 100%;
    margin: 0.5rem 0;
  }
</style>
