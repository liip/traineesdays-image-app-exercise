<script lang="ts">
  import debounce from "debounce";
  import HistoryElement from "./HistoryElement.svelte";
  import { history } from "../stores";

  let historyWrapper: any;

  const scrollDown = (_history) => {
    if (!historyWrapper) return;
    historyWrapper.scrollTo({
      top: historyWrapper.scrollHeight,
      behavior: "smooth",
    });
  };

  const scroll = debounce((history) => scrollDown(history), 50);

  $: scroll($history);
</script>

<div
  class="history"
  bind:this={historyWrapper}
>
  {#each $history.filter(({ role }) => role !== "system") as historyElement}
    <HistoryElement data={historyElement} />
  {/each}
</div>

<style>
  .history {
    width: 100%;
    height: 100%;
    margin-bottom: 0.5rem;
    overflow-y: scroll;
  }
</style>
