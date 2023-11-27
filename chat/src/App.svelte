<script>
  import Input from "./components/Input.svelte";
  import Send from "./components/Send.svelte";
  import History from "./components/History.svelte";
</script>

<div class="app-wrapper">
  <div class="app">
    <form
      class="input-wrapper"
      on:submit|preventDefault
    >
      <Input />
      <Send />
    </form>
    <History />
  </div>
</div>

<style>
  .app-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .app {
    display: flex;
    flex-direction: column;
    width: calc(100vw - var(--margin) * 2);
    /* padding: 0 var(--margin); */
    height: 100vh;
  }
  .input-wrapper {
    display: flex;
    margin-top: 3rem;
  }
</style>
