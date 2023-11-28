# Schnuppertag bei der Liip

## Einfache Aufgaben

### 1. Titel

Ein Titel, oder heading, gibt es in 6 grössen in HTML.

```svelte
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>
```

Hierbei ist zu beachten, dass `<h1>` der grösste ist und `<h6>` der kleinste.

Deine Aufgabe ist es nun, einen Titel hinzuzufügen.

<details>
<summary>TIPP</summary>

```svelte
<div class="app">
  <h1>Bild generierung</h1>

  <!-- Form, Bild & Error -->
</div>
```

</details>

### 2. Knöpfe

Ein Knopf, in HTML auch `button`, ist wie folgt aufgebaut:

```svelte
<button>
  Hello World!
</button>
```

Wobei `Hello World!` der text ist der angezeigt wird.

Deine Aufgabe ist es jetzt nun den Knopf zu finden, der gebraucht wird um die Bilder zu generieren, und den Text in etwas passenderes abzuändern.

<details>
<summary>TIPP</summary>

Das musst du suchen und `Generate` ändern. Du findest es in der Mitte der Datei.

```svelte
<button
  class="submit-button"
  on:click={handleGenerate}
>
  Generate
</button>
```

</details>

### 3. Input & Knopf Styling

CSS, ausgeschrieben `Cascading Style Sheets`, benutzt man um Farbe, Form und Position von HTML Elementen zu ändern. CSS kann sehr mächtig sein und komplex jedoch kann man auch sehr einfach nur die Farben ändern.

Deine Aufgabe ist es herum zu spielen mit dem styling des Inputs und des Knopfes.

<details>
<summary>TIPP</summary>

Du kannst Eigenschaften wie `background`, `color` und `border` benutzen jedoch darfst du auch andere benutzen.

Das was du editieren musst, findest du im `<style>` tag der zu unterst in der Datei ist.

```svelte
<style>
  .custom-input {
    /* Deine Eigenschaften hier. */
  }

  .custom-button {
    /* Deine Eigenschaften hier. */
  }

  /* Andere Selektoren. */
</style>
```

Damit du nicht noch nachschauen musst wie du `background`, `color` und `border` benutzt, hier ein paar Beispiele.

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

### 4. Lade Indikator

Das angezeigt wird wann das Bild generiert wird sollst du ein Lade Indikator einfügen. Um das zu erreichen musst du eine Variable hinzufügen welche du verwenden sollst um den Ladeindikator anzuzeigen.

<details>
<summary>TIPP</summary>

Hier was du machen musst

```svelte
<script>
  // Anderer code...

  let isGenerating = false; // Neu

  const handleGenerate = async () => {
    if (isGenerating) return; // Neu

    isGenerating = true; // Neu

    source = await generate(prompt);

    isGenerating = false; // Neu
  };
</script>

<div class="app">
  <!-- Form -->

  <!-- Neu -->
  {#if isGenerating}
    <p>Wird generiert...</p>
  {/if}

  <!-- Bild und Error -->
</div>
```

Das ist viel Code aber ich erklär es dir kurz.

#### JavaScript

Mit `let isGenerating = false;` erstellst du eine Variable mit Namen `isGenerating` und dem Wert `false`.

In der `handleGenerate` Methode schaust du ob schon ein Bild am generieren ist, falls ja, dann beende die Methode, falls nein geh weiter. Das wäre `if (isGenerating) return;`

Jetzt setzt du `isGenerating` auf `true` was dazu führt, dass wenn du den Knopf ein zweites Mal drückst, dass nichts passiert und wir auch wissen wann es generiert wird und wir so ein Lade Indikator anzeigen können.

Die nächsten zwei Zeilen sind nicht verändert.

Als letztes setzt du `isGenerating` wieder auf `false` da das Bild fertig generiert wurde und der Lade Indikator nicht mehr angezeigt werden muss.

#### HTML

Hier fügst du nur drei Zeilen hinzu. Diese sollst du direkt unter dem Form hinzufügen, dort wo der Knopf und der Input liegen.

Diese drei Zeilen, wie es der Name schon sagt, beinhalten ein `if`-check welcher schaut ob isGenerating `true` ist. Falls es `true` ist, dann wird der Paragraph Tag angezeigt mit einem passenden Lade Text.

</details>

### 5. Dynamischer Alt Text

Alt Text bei Bildern im Internet werden gebraucht falls das Bild nicht laden kann oder für Blinde. Ersteres kann zmb. passieren falls die Internet Verbindung zu langsam ist oder das Bild nicht mehr existiert oder verschoben wurde.

Ein guter Start für ein Alt Text in unserem Fall wäre den Text vom Input Feld zu nehmen und zu benutzen.

<details>
<summary>TIPP</summary>

In Svelte kann man dynamisch den Wert einer Variable als Attribut auf Elemente setzen.

Hier wie du das machen kannst.

```svelte
<script lang="ts">
  let prompt = "Eine siamesische Katze mit blauen Augen.";
</script>


<img alt="{prompt}" />
```

Sobald man `{` und `}` in einem Attribut benutzt kann man variablen einsetzen.

</details>

## Mittlere Aufgaben

### 6. Bilder Galerie

Es wäre doch cool wenn wir Bilder die wir schon generiert haben auch automatisch gespeichert werden.

<details>
<summary>TIPP</summary>

```svelte
<script lang="ts">
  import { addImage, images } from "./gallery"; // Neu

  // Restlicher code

  // let source = ""; <-- Kann entfernt werden

  const handleGenerate = async () => {
    if (isGenerating) return;

    isGenerating = true;

    const url = await generate(prompt);
    addImage(url, prompt); // Neu

    isGenerating = false;
  };
</script>


<div class="app">
  <!-- Form & Lade Indikator -->

  <!-- Neu bzw. ersetzt altes image -->
  {#each $images as {url, prompt}}
    <img
      class="image"
      src="{url}"
      alt="{prompt}"
    />
  {/each}

  <!-- Error -->
</div>
```

Erneut sehr viel code aber hier die Erklärung.

`addImage` und `images` sind von uns zu verfügung gestellt und ihr könnt sie einfach benutzen.

Wir entfernen die variable `source` da sie nicht länger gebraucht wird.

Im `handleGenerate` ändern wir zwei Zeilen. Einerseits setzen wir das Resultat von unserer generate funktion auf die neu erstellte Variable `url` und in der zweiten Zeile geben wir `url` und `prompt` an `addImage` weiter welches das ganze für uns abspeichert.

Anstelle wie vorher einfach die `source` variable einem `<img>` Tag zu übergeben, iterieren wir nun über `$images` was eine Liste von unseren Bildern ist. Iterieren bedeutet so viel wie, wir gehen durch die ganze Liste und machen etwas bestimmtes mit jedem Bild. In unserem Fall geben wir die Bild url an einen `<img>` tag weiter.

Nun kannst du ausprobieren ob es auch funktioniert! Du kannst es gut erkennen, da es mehrere Bilder untereinander sein sollten wenn du Knopf zum generieren drückst.

</details>

### 7. Styling der Galerie

Im Moment sind die einzelnen Bilder noch sehr gross und nicht sehr schön angeordnet.

In CSS gibt es etwas das nennt sich `grid` und damit kann man die Bilder in einem 2 breiten Gitter anordnen.

<details>
<summary>TIPP</summary>

```svelte
<div class="app">
  <!-- Form & Lade Indikator -->

  <!-- Neu -->
  <div class="image-grid">
    {#each $images as {url, prompt}}
      <img
        class="image"
        src="{url}"
        alt="{prompt}"
      />
    {/each}
  </div>

  <!-- Error -->
</div>

<style>
  /* Andere Styles */

  .image {
    /* width: 768px; <-- Entfernt */
    border: 3px solid black;
    border-radius: 8px;
  }

  .image-grid {
    width: 768px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  /* Andere Styles */
</style>
```

Diesmal kein Javascript dafür ein wenig mehr CSS.

Im ersten Schritt fügen wir einen div um unsere Bilder hinzu mit der Klasse `image-grid`.

Im `<style>` Tag editieren wir dann die `image` Klasse und erstellen die `image-grid` Klasse. In der ersteren entfernen wir die Breite unter dem Attribute `width`. In der zweiten Klasse fügen wir die Breite wieder hinzu und machen den div zu einem Gitter welches 2 Bilder nebeneinander haben kann. Dazu fügen wir noch einen 8px breiten Spalt zwischen den Bildern hinzu damit sie nicht aneinander kleben.

</details>

## Schwere Aufgaben
