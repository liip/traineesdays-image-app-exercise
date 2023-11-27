<script lang="ts">
  import { input, openai, history, generating } from "../stores";

  const handleClick = async () => {
    if (!$input || $generating) return;

    generating.set(true);

    let content: any;

    content = $input;

    history.update((history) => [...history, { role: "user", content }]);

    input.set("");

    const stream = await $openai.chat.completions.create({
      model: "gpt-4-1106-preview",
      messages: $history,
      stream: true,
      max_tokens: 4096,
    });

    for await (const chunk of stream) {
      const [choice] = chunk.choices;
      if (choice.finish_reason) continue;

      const { content, role } = choice.delta;

      if (!content && !role) continue;
      if (!content && role) {
        history.update((history) => [
          ...history,
          { role: "assistant", content: "" },
        ]);

        continue;
      }
      history.update((history) => {
        const currentActiveMessage = history[history.length - 1];
        currentActiveMessage.content += content;

        return [...history.slice(0, -1), currentActiveMessage];
      });
    }

    generating.set(false);
  };
</script>

<button
  type="submit"
  class="base button"
  on:click={handleClick}
>
  Send
</button>

<style>
  .button {
    margin: 0.5rem;
    margin-right: 0;
  }
</style>
