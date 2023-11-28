<script>
  import Input from "./components/Input.svelte";
  import Send from "./components/Send.svelte";
  import History from "./components/History.svelte";
</script>

<div class="app-wrapper">
  <div class="app">
    <h1 class="title">Svelte Chat</h1>

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
    height: 100vh;
  }
  .input-wrapper {
    display: flex;
  }

  .title {
    text-align: center;
    font-size: 4rem;
    margin: 2rem 0;
  }
</style>
