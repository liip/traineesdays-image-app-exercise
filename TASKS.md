# Schnuppertag bei der Liip

## Einfache Aufgaben

### 1. Titel

#### Aufgabe

Füge einen Titel in die Webseite ein.

#### Hilfestellung

Ein Titel, oder heading, gibt es in 6 grössen in HTML.

```svelte
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>
```

Hierbei ist zu beachten, dass `<h1>` am grössten ist und `<h6>` am kleinste.

Hier findest du die Stelle an der du deinen Titel einfügst.

```svelte
<div class="app">
  <h>Dein Titel</h>

  <!-- Form, Bild & Error -->
</div>
```

Beachte, dass `<h>` kein endgültiger Titel ist und du noch die grösse (1-6) hinzufügen musst.

<div class="solution">

```svelte
<div class="app">
  <h1>Dein Titel</h1>

  <!-- Form, Image & Error -->
</div>
```

</div>

### 2. Knöpfe

#### Aufgabe

Ändere den Text des Knopfes der im Moment mit `Generate` angeschrieben ist.

#### Hilfestellung

Ein Knopf, in HTML auch `button`, sieht wie folgt aus

```svelte
<button>
  Knopf Text
</button>
```

Wobei `Knopf Text` der text ist der angezeigt wird.

Hier findest du die Stelle an der du den Text im Knopf abändern sollst.

```svelte
<button
  class="submit-button custom-button"
  on:click={handleGenerate}
>
  Dein neuere Text
</button>
```

<div class="solution">

```svelte
<div class="app">
  <form
    class="form"
    on:submit|preventDefault
  >
    <!-- Prompt Input -->

    <button
      class="submit-button custom-button"
      on:click={handleGenerate}
    >
      Dein Generate Text
    </button>
  </form>

  <!-- Image & Error -->
</div>
```

</div>

### 3. Prompt anpassen

#### Aufgabe

Diese Aufgabe ist sehr simple und du kannst sie jederzeit mehrmals machen.

Du sollst den Prompt anpassen. Im Moment ist dieser `"Eine siamesische Katze mit blauen Augen."`.

#### Hilfestellung

Hier findest du die Stelle an der du den Prompt abändern sollst.

```svelte
<script lang="ts">
  // Import & source Variable.

  let prompt = "Eine siamesische Katze mit blauen Augen."; // <-- Hier anpassen

  // handleGenerate Funktion
</script>
```

Du kannst nach `let prompt` mit `CTRL + F` auf Windows & Linux danach suchen und auf MacOS mit `Command + F`.

<div class="solution">

```svelte
<script lang="ts">
  let prompt = "Ein neuer Prompt.";
</script>
```

</div>

### 4. Input & Knopf Styling

#### Aufgabe

CSS, ausgeschrieben `Cascading Style Sheets`, benutzt man um Farbe, Form und Position von HTML Elementen zu ändern.

Du sollst die Farbe des Textes, des Hintergrundes und des Randes vom Generier Knopf und vom Prompt Input abändern.

#### Hilfestellung

Hierzu stehen dir zwei leere Klassen schon zur verfügung.

```svelte
<style>
  .custom-input {
    /* Deine Eigenschaften hier. */
  }

  .custom-button {
    /* Deine Eigenschaften hier. */
  }
</style>
```

<details>
<summary>TIPP</summary>

Du kannst Eigenschaften wie `background`, `color` und `border` benutzen.

```css
.class {
  /* Du kannst fast alle Farben auf Englisch angeben. */
  background: red;

  /* Das gleiche wie beim Hintergrund. */
  color: black;

  /* Die border ist ein wenig komplexer. Sie besteht aus 3 Teilen. */
  /* Zuerst kommt die Dicke in pixel zum Beispiel. Hier 1px */
  /* Danach die Art der Border. Hier solid aber es geht auch dotted oder dashed für gepunktete oder gestrichelte Linien. */
  /* Und zuletzt die Farbe, die ist, wie bei background und color, fast alle Farben auf Englisch. */
  border: 1px solid black;
}
```

</details>

<div class="solution">

```svelte
<style>
  .custom-input {
    background: red;
    color: green;
  }

  .custom-button {
    background: orange;
    color: white;
  }
</style>
```

</div>

### 5. Lade Indikator

#### Aufgabe

Ein Lade Indikator wird gebraucht um anzuzeigen, wenn etwas geladen wird.

Hier ein Beispiel

<img src="assets/laoding-indicator.gif" width="64" alt="Lade Indikator" />

Jedoch sollst du nur einen Text anzeigen, welcher dem Nutzer eine Visuelle Mitteilung gibt, dass das Bild gerade geladen wird.

#### Hilfestellung

Hierfür kannst du eine Variable gebrauchen und ein `if` Bedingung. In Svelte kannst du dies wie folgt erzielen.

```svelte
<script>
  let loading = false;

  const generate = () => {
    if (loading) {
      return
    }

    loading = true;

    // Restlicher code

    loading = false;
  }
</script>

{#if loading}
  <p>
    Wird geladen
  </p>
{/if}

<button on:click={generate}>
  Generier
</button>
```

Hier wird eine Variable `loading` erstellt welche initial negativ eingestellt ist (`false`).

Dies wird dann in der `generate` Funktion auf positiv geändert (`true`) und nach einem beliebigen Prozess wieder auf einen negativen Wert (`false`). Dazu kommt noch, dass wir am Anfang der `generate` Funktion schauen ob `loading` positiv oder negativ ist und falls es positiv ist, brechen wir die Funktion ab.

Die `generate` Funktion wird jedoch nicht direkt ausgeführt, sondern erst wenn der Knopf gedrückt wird. Mit `on:click` sagen wir, dass es `generate` ausführen soll, wenn der Knopf gedrückt wird.

Über dem Knopf schauen wir ob `loading` negativ oder positiv ist und falls es positiv ist, zeigen wir einen Paragraph (`<p>`) mit dem Text `Wird geladen` an.

Alles im `<script>` ist JavaScript und alles ausserhalb ist HTML. Dazu sid Variablen reaktiv. Das heisst, dass wenn du eine Variable oben im `<script>` erstellst und danach veränderst kannst du die Veränderung auch im HTML direkt beobachten, deshalb heisst es auch **Reaktiv**, weil HTML auf die Veränderung von JavaScript **reagiert**.

<div class="solution">

```svelte
<script lang="ts">
  import { generate, error } from "./openai";
  import { addImage, images } from "./gallery";

  let source = "";

  let prompt = "Eine siamesische Katze mit blauen Augen.";

  let isGenerating = false;

  const handleGenerate = async () => {
    if (isGenerating) {
      return
    };

    isGenerating = true;

    source = await generate(prompt);

    isGenerating = false;
  };
</script>

<div class="app">
  <!-- Form -->

  {#if isGenerating}
    <p>Wird generiert...</p>
  {/if}

  <!-- Image & Error -->
</div>
```

</div>

### 6. Dynamischer Alt Text

#### Aufgabe

Alt Text bei Bildern im Internet werden gebraucht falls das Bild nicht laden kann oder für Blinde. Ersteres kann zmb. passieren falls die Internet Verbindung zu langsam ist oder das Bild nicht mehr existiert.

Setze den Alt Text vom Bild auf den Prompt Text.

#### Hilfestellung

In Svelte kann man dynamisch den Wert einer Variable als Attribut auf Elemente setzen.

Hier wie du sowas machen könntest.

```svelte
<script>
  let altText = "Ein Bild von einer Katze";
</script>

<img alt="{altText}" />
```

Sobald man `{` und `}` in einem Attribut benutzt kann man variablen einsetzen.

<div class="solution">

```svelte
<div class="app">
  <!-- Form & Loading -->

  <img
    class="image"
    src={url}
    alt={prompt}
  />

  <!-- Error -->
</div>
```

</div>

## Mittlere Aufgaben

Wir empfehlen den Chat spätestens hier zu gebrauchen!

### 7. Bilder Galerie

#### Aufgabe

Speichere jedes generierte Bild mit dem jeweiligen Prompt ab und iteriere über alle Bilder in der Liste und zeige sie an.

#### Hilfestellung

Wenn du eine Liste in Svelte hast, kannst du wie folgt darüber itererieren, was bedeuetet, dass wir durch alle Bilder durch gehen und, in unserem Fall, sie anzeigen.

```svelte
<script>
  let imageList = ["url1", "url2", "url3"];
</script>

{#each imageList as url}
  <img src={url} />
{/each}
```

Hierbei ist zu beachten, dass wir wie beim `{#if} ... {/if}` die gewellten Klammern herum haben.

Der erste Wert direkt nach dem `each` ist unsere Liste. Danach kommt ein `as` und eine neue Variable, hier `url`. Jetzt können wir in dem `each` Block `url` benutzen und somit geht Svelte über jedes Bild und zeigt es in einem `<img>` an.

Wir haben für dich eine `addImage` Funktion bereitgestellt welche die Bilder zu einer bestehenden Liste hinzufügt. Hier wie du die addImage Funktion benutzen kannst.

```svelte
<script>
   // Das wäre dein Prompt den du immer wieder mal änderst.
  let prompt = "Ein Baum auf einer Wiese im Herbst.";
   // Das wäre die url welche du von der generate Funktion zurück bekommst.
  let url = "url1";

  // So benutzt du die addImage Funktion.
  addImage(url, prompt);
</script>
```

Diese Liste haben wir die auch schon zur Verfügung gestellt, jedoch ist es eine spezielle Liste die du wie folgt benutzen kannst.

```svelte
<!-- $images ist unsere Liste. -->
<!-- Wir bekommen wir einmal die url des Bildes und der dazugehörige Prompt. -->
{#each $images as { url, prompt }}
  <img src={url} alt={prompt} />
{/each}
```

<div class="solution">

```svelte
<script lang="ts">
  import { generate, error } from "./openai";
  import { addImage, images } from "./gallery";

  let source = "";

  let prompt = "Eine siamesische Katze mit blauen Augen.";

  let isGenerating = false;

  const handleGenerate = async () => {
    if (isGenerating) return;

    isGenerating = true;

    const url = await generate(prompt);
    addImage(url, prompt);

    isGenerating = false;
  };
</script>

<div class="app">
  <!-- Form & Loading -->

  {#each $images as { url, prompt }}
    <img
      class="image"
      src={url}
      alt={prompt}
    />
  {/each}

  <!-- Error -->
</div>
```

</div>

### 8. Styling der Galerie

#### Aufgabe

Ändere das Styling der Galerie so, dass zwei Bilder nebeneinander sind und gleich gross angezeigt werden.

#### Hilfestellung

Wenn du mehrere Elemente hast die du in einem Gitter anzeigen willst kannst du das wie folgt tun.

```svelte
<div class="grid">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
  <p>Paragraph 4</p>
  <p>Paragraph 5</p>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    overflow-y: scroll;
  }.

</style>
```

Mit diesem css würden die 5 Paragraphe so angeordnet werden, dass jeweils zwei nebeneinander liegen und sie einen 8 Pixel grossen Abstand dazwischen haben. Das `1fr 1fr` bedeutet, dass das erste Element in dem Gitter gleich viel Platz erhält wie das zweite Element. Das `overflow-y: scroll` macht es auch noch so, dass alles was in der höhe zu gross wäre in dem Gitter würde unsichtbar werden und man wird mit dem Mausrad beziehungsweise mit dem Trackpad nach unten scrollen können.

Vergiss nicht, den Bildern die Breite (`width`) zu enziehen und es dem Gitter zu übergeben. Das Styling für die Bilder findest du hier.

```svelte
<style>
  .image {
    width: 768px;
    border: 3px solid black;
    border-radius: 8px;
  }
</style>
```

<div class="solution">

```svelte
<div class="app">
  <!-- Form & Loading -->

  <div class="image-grid">
    {#each $images as { url, prompt }}
      <img
        class="image"
        src={url}
        alt={prompt}
      />
    {/each}
  </div>

  <!-- Error -->
</div>

<style>
  /* Andere Styles */

  .image {
    border: 3px solid black;
    border-radius: 8px;
  }

  .image-grid {
    width: 768px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    overflow-y: scroll;
  }
</style>
```

</div>

### 9. Mehrere Bilder auf einmal

#### Aufgabe

Füge ein weiteres Eingabefeld hinzu womit du die Anzahl der Bilder pro Knopfdruck bestimmen kannst.

#### Hilfestellung

Die `generate` Funktion welche wir gebrauchen um die Bilder zu generieren, kann auch noch einen weiteren Parameter entgegen nehmen, welcher die Anzahl der Bilder, die es generieren soll, bestimmt. Hier noch ein Beispiel wie du die `generate` Funktion nun verwenden kannst.

```svelte
<script>
  let amount = 4;
  let prompt = "Ein Baum auf einer Wiese im Herbst.";

  let urls = await generate(prompt, amount);
</script>
```

Du kannst die mehreren urls dann jedoch wie gewohnt mit der `addImage` zur Liste der Bilder hinzufügen.

```svelte
<script>
  addImage(urls, prompt);
</script>
```

Hier ein Beispiel wie ein solches Eingabefeld in Svelte aussehen kann.

```svelte
<script>
  let amount = 1;
</script>

<input type="number" min="1" max="4" bind:value={amount}/>
```

Im `<script>` erstellen wir eine Variable namens `amount`. Darunter erstellen wir einen `<input>` welcher vom Typ `number` ist, das heisst man kann keine Buchstaben eingeben. Gleich dahinter sagen wir dem Eingabefeld, dass der Wert darin mindestens 1 und maximal 4 sein kann. Zuletzt binden wir die Variable `amount` auf den Parameter `value` vom Eingabefeld was dazu führt, dass die Variable sich mit verändert wenn du die Zahl im `<input>` änderst.

<div class="solution">

```svelte
<script lang="ts">
  import { generate, error } from "./openai";
  import { addImage, images } from "./gallery";

  let source = "";

  let prompt = "Eine siamesische Katze mit blauen Augen.";

  let isGenerating = false;

  let amount = 1;

  const handleGenerate = async () => {
    if (isGenerating) return;

    isGenerating = true;

    const url = await generate(prompt, amount);
    addImage(url, prompt);

    isGenerating = false;
  };
</script>

<div class="app">
  <form
    class="form"
    on:submit|preventDefault
  >
    <!-- Prompt Input -->
    <input
      type="number"
      min="1"
      max="4"
      bind:value={amount}
      class="amount"
    />
    <!-- Generate Button -->
  </form>

  <!-- Loading, Bilder & Error -->
</div>

```

</div>

### 10. Einzelne Bilder löschen

## Schwere Aufgaben
