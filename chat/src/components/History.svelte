<script lang="ts">
  import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
  import HistoryElement from "./HistoryElement.svelte";
  import { history } from "../stores";
  import { tick } from "svelte";

  let historyWrapper: HTMLDivElement;

  let isStuckToBottom = true;

  const handleScroll = () =>
    (isStuckToBottom =
      historyWrapper.scrollHeight <=
      historyWrapper.scrollTop + historyWrapper.clientHeight + 50);

  const scroll = async (history: ChatCompletionMessageParam[]) => {
    if (history[history.length - 1].role === "user") {
      await tick();
      historyWrapper.scrollTo({
        top: historyWrapper.scrollHeight,
      });
    }

    if (!historyWrapper) return;
    if (!isStuckToBottom) return;

    historyWrapper.scrollTo({
      top: historyWrapper.scrollHeight,
    });
  };

  $: scroll($history);

</script>

<div
  class="history"
  on:scroll={handleScroll}
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
