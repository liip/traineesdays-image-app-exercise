# Schnuppertag bei der Liip

Heute lernst du, wie man mithilfe von Künstlicher Intelligenz Bilder generiert. Du wirst erfahren, wie man ein HTML-Element erstellt, es stilvoll gestaltet und es mit JavaScript reaktiv macht.

Nachdem du das Programm gestartet hast, öffnen sich drei neue Browser-Tabs. Im ersten Tab, betitelt Bilder Generierung, findest du die Webseite, auf der du praktisch arbeiten wirst. Der zweite Tab, Aufgaben, enthält die dazugehörigen Übungen. Im dritten Tab, Svelte Chat, befindet sich ein Chatbot, den du zur Unterstützung heranziehen kannst. Dieser Chatbot kennt alle Aufgaben und deren Lösungen. Nutze den Chatbot, wenn du Hilfe bei einer Aufgabe benötigst, oder kontaktiere uns direkt.

Beginne nun mit den Aufgaben, indem du den Tab Bilder Generierung öffnest.

## Einfache Aufgaben

### 1. Titel hinzufügen

#### Aufgabe

Füge der Webseite einen Titel mit dem Text `Bild Generierung` hinzu.

#### Hilfestellung

Ein Titel, auch Überschrift genannt, kann in HTML in sechs verschiedenen Größen dargestellt werden:

```svelte
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>
```

Dabei ist `<h1>` die größte Überschrift und `<h6>` die kleinste.

An folgender Stelle solltest du den Titel einfügen:

```svelte
<div class="app">
  <h>Dein Titel</h>

  <!-- Form, Bild & Error -->
</div>
```

Ersetze `<h>` durch ein geeignetes Überschrift-Tag, indem du die passende Größe (1-6) wählst.

<div class="solution">

```svelte
<div class="app">
  <h1>Dein Titel</h1>

  <!-- Form, Image & Error -->
</div>
```

</div>

### 2. Button Text ändern

#### Aufgabe

Ändere die Beschriftung des Buttons, der momentan `Generate` lautet.

#### Hilfestellung

Ein Button, im HTML als `<button>` bezeichnet, sieht wie folgt aus:

```svelte
<button>
  Button Beschriftung
</button>
```

Dabei ist `Button Beschriftung` der Text, der auf dem Button dargestellt wird.

<details>
<summary>TIPP</summary>

Hier siehst du den Abschnitt, wo du die Beschriftung des Buttons verändern kannst.

```svelte
<button
  class="submit-button"
  on:click={handleGenerate}
>
  Neuer Button Text
</button>
```

</details>

<div class="solution">

```svelte
<div class="app">
  <form
    class="form"
    on:submit|preventDefault
  >
    <!-- Eingabeaufforderung -->

    <button
      class="submit-button"
      on:click={handleGenerate}
    >
      Neuer Button Text
    </button>
  </form>

  <!-- Bild & Fehlermeldung -->
</div>
```

</div>

### 3. Anweisungstext (Prompt) anpassen

#### Aufgabe

Vereinfache den aktuellen Prompt `"Eine siamesische Katze mit blauen Augen."`

Experimentiere ein wenig mit dem Prompt und betrachte, wie sich die Ergebnisse verändern.

#### Hilfestellung

Hier siehst du, wo du den Prompt verändern sollst.

```svelte
<script lang="ts">
  // Importiere notwendige Quellen und initialisiere Variablen.

  let prompt = "Eine siamesische Katze mit blauen Augen."; // <-- Hier Anpassungen vornehmen

  // Funktion zum Auslösen der Generierung
</script>
```

Verwende `let prompt` als Suchbegriff, nutze `CTRL + F` auf Windows & Linux oder `Command + F` auf MacOS, um dies zu tun.

<div class="solution">

```svelte
<script lang="ts">
  let prompt = "Ein neuer Prompt.";
</script>
```

</div>

### 4. Input & Button Styling

#### Aufgabe

Mit CSS kannst du die Erscheinung von HTML-Elementen anpassen, einschließlich ihrer Farbe, Form und Position.

Deine Aufgabe ist es, die Textfarbe, Hintergrundfarbe und Rahmenfarbe des Generierungsbuttons und des Eingabefelds für den Prompt zu ändern.

#### Hilfestellung

Zwei Klassen sind bereits vorgesehen und warten auf deine Anpassungen.

```svelte
<style>
  .prompt-input {
    /* Füge deine Eigenschaften hier ein. */
  }

  .submit-button {
    /* Füge deine Eigenschaften hier ein. */
  }
</style>
```

<details>
<summary>TIPP</summary>

Du kannst Eigenschaften wie `background`, `color` und `border` verwenden.

```css
.class {
  /* Du kannst die meisten Farben mit ihrem englischen Namen verwenden. */
  background: red;

  /* Gilt auch für Textfarbe. */
  color: black;

  /* Der Rahmen (border) setzt sich aus drei Werten zusammen. */
  /* Erst wird die Dicke angegeben, z.B. 1px. */
  /* Danach folgt der Stil des Rahmens. 'solid' für eine durchgezogene Linie, es gibt aber auch 'dotted' für gepunktet oder 'dashed' für gestrichelt. */
  /* Zu guter Letzt die Farbe des Rahmens, die wie bei background und color, in den meisten Fällen in Englisch angegeben wird. */
  border: 1px solid black;
}
```

</details>

<div class="solution">

```svelte
<style>
  .prompt-input {
    background: red;
    color: green;
  }

  .submit-button {
    background: orange;
    color: white;
  }
</style>
```

</div>

### 5. Lade-Indikator hinzufügen

#### Aufgabe

Ein Lade-Indikator wird verwendet, um anzuzeigen, dass etwas gerade geladen wird.

Hier siehst du ein Beispiel dafür:

<img src="assets/loading-indicator.gif" alt="Lade-Indikator" />

In deinem Fall soll jedoch ein Text eingesetzt werden, um zu signalisieren, dass das Bild momentan erstellt wird.

#### Hilfestellung

Nutze für diese Aufgabe eine Variable und eine `if`-Bedingung.

In Svelte könntest du das so umsetzen:

```svelte
<script>
  let loading = false;

  const generate = () => {
    if (loading) {
      return;
    }

    loading = true;

    // Hier den restlichen Code einfügen

    loading = false;
  }
</script>

{#if loading}
  <p>Wird geladen...</p>
{/if}

<button on:click={generate}>
  Bild erstellen
</button>
```

Anfänglich wird die Variable `loading` auf `false` gesetzt, was bedeutet, dass aktuell nichts geladen wird.

Innerhalb der `generate`-Funktion wird dieser Wert zu Beginn auf `true` geändert, um den Ladevorgang anzuzeigen. Sobald der Prozess abgeschlossen ist, setzen wir `loading` zurück auf `false`. Zudem prüfen wir zu Beginn der Funktion, ob `loading` bereits `true` ist, um die Funktion gegebenenfalls nicht erneut auszuführen.

Die `generate`-Funktion wird aktiviert, wenn der Nutzer auf den Button klickt. Mit `on:click` legen wir fest, dass die Funktion `generate` ausgeführt werden soll, sobald der Button betätigt wird.

Über dem Button wird geprüft, ob `loading` den Wert `true` hat, und falls ja, zeigen wir einen Absatz (`<p>`) mit dem Texthinweis `Wird geladen...` an.

Der Bereich innerhalb von `<script>` ist JavaScript, während alles außerhalb HTML entspricht. Variablen sind dabei reaktiv, was bedeutet, dass eine im `<script>`-Teil erstellte und später veränderte Variable ihre Aktualisierung unmittelbar im zugehörigen HTML wiedergibt. Dies erklärt den Begriff **Reaktiv**, da das HTML automatisch auf jegliche Änderungen im JavaScript **reagiert**.

<div class="solution">

```svelte
<script lang="ts">
  import { generate, error } from "./openai";
  import { addImage, images, removeImage } from "./gallery";

  let source = "";

  let prompt = "Eine siamesische Katze mit blauen Augen.";

  let isGenerating = false;

  const handleGenerate = async () => {
    if (isGenerating) {
      return;
    };

    isGenerating = true;

    source = await generate(prompt);

    isGenerating = false;
  };
</script>

<div class="app">
  <!-- Formular -->

  {#if isGenerating}
    <p>Wird generiert...</p>
  {/if}

  <!-- Bild & Fehlermeldung -->
</div>
```

</div>

### 6. Dynamischer Alt Text hinzufügen

#### Aufgabe

Ein Alt-Text ist bei Bildern im Internet wichtig, falls das Bild nicht geladen werden kann oder für Personen mit Sehbehinderungen, die auf Deine Webseite zugreifen. Ersteres kann z. B. geschehen, wenn die Internetverbindung zu langsam ist oder das Bild aus irgendeinem Grund nicht mehr verfügbar ist.

Setze den Alt-Text des Bildes auf den Text des Prompts.

#### Hilfestellung

In Svelte ist es möglich, den Wert einer Variablen dynamisch als Attribut in Elemente einzufügen.

Hier ein Beispiel:

```svelte
<script>
  let altText = "Ein Bild von einer Katze";
</script>

<img alt="{altText}" />
```

Indem man `{` und `}` in einem Attribut verwendet, kann man Variablen einfügen.

<div class="solution">

```svelte
<div class="app">
  <!-- Formular & Laden -->

  <img
    class="image"
    src={url}
    alt={prompt}
  />

  <!-- Fehlermeldung -->
</div>
```

</div>

## Mittlere Aufgaben

Wir empfehlen den Chatbot spätestens hier zu gebrauchen!

### 7. Bilder Galerie erstellen

#### Aufgabe

Speichere jedes erzeugte Bild zusammen mit dem dazugehörigen Textbefehl und zeige anschließend alle Bilder aus der Liste an.

#### Hilfestellung

Wenn du eine Liste in Svelte vorliegen hast, kannst du diese so durchlaufen, dass wir jedes Element der Liste – in unserem Fall ein Bild – auf dem Bildschirm anzeigen.

```svelte
<script>
  let imageList = ["url1", "url2", "url3"];
</script>

{#each imageList as url}
  <img src={url} />
{/each}
```

Beachte dabei, dass die geschweiften Klammern um `each` genauso wie bei `{#if} ... {/if}` verwendet werden.

Das erste Element nach `each` repräsentiert die Liste, die wir durchgehen wollen. Dann folgt ein `as` und eine neue Variable, die wir hier `url` nennen. Innerhalb des `each`-Blocks können wir die Variable `url` verwenden, um Svelte jedes Bild in einem `<img>`-Tag anzeigen zu lassen.

Eine `addImage`-Funktion haben wir dir bereits zur Verfügung gestellt, um Bilder einer bestehenden Liste hinzuzufügen. So kannst du die `addImage`-Funktion verwenden:

```svelte
<script>
   // Das wäre dein Textbefehl, den du immer wieder ändern kannst.
  let prompt = "Ein Baum auf einer Wiese im Herbst.";
   // Das wäre die URL, die du von der Generierungsfunktion erhältst.
  let url = "url1";

  // So rufst du die addImage-Funktion auf.
  addImage(url, prompt);
</script>
```

Diese spezielle Liste haben wir dir ebenfalls bereits bereitgestellt und du kannst sie folgendermaßen nutzen:

```svelte
<!-- $images ist unsere Liste, in der jede URL eines Bildes und der dazugehörige Textbefehl gespeichert ist. -->
{#each $images as { url, prompt }}
  <img src={url} alt={prompt} />
{/each}
```

<div class="solution">

```svelte
<script lang="ts">
  import { generate, error } from "./openai";
  import { addImage, images, removeImage } from "./gallery";

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
  <!-- Form & Loading Indikator -->

  {#each $images as { url, prompt }}
    <img
      class="image"
      src={url}
      alt={prompt}
    />
  {/each}

  <!-- Fehlermeldung -->
</div>
```

</div>

### 8. Styling der Galerie

#### Aufgabe

Passe das Design der Bildergalerie an, sodass zwei Bilder nebeneinander und in derselben Größe dargestellt werden.

#### Hilfestellung

Wenn du mehrere Elemente in einem Raster darstellen möchtest, kannst du es wie folgt machen:

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
  }
</style>
```

Mit diesem CSS werden die fünf Absätze so angeordnet, dass immer zwei nebeneinanderstehen und einen Abstand von 8 Pixel zueinander haben. Das "1fr 1fr" stellt sicher, dass das erste Element im Raster genauso viel Platz einnimmt wie das zweite Element. Die Einstellung `overflow-y: scroll` sorgt dafür, dass Inhalte, die in der Höhe über den Rand des Rasters hinausgehen, verborgen bleiben und durch Scrollen mit dem Mausrad oder Trackpad zugänglich gemacht werden können.

Vergiss nicht, den Bildern die feste Breite zu entziehen und sie stattdessen vom Raster bestimmen zu lassen.

<details>
<summary>TIPP</summary>

Hier findest du das Styling für die Bilder.

```svelte
<style>
  .image {
    width: 768px;
    border: 3px solid black;
    border-radius: 8px;
  }
</style>
```

</details>

<div class="solution">

```svelte
<div class="app">
  <!-- Formular & Laden -->

  <div class="image-grid">
    {#each $images as { url, prompt }}
      <img
        class="image"
        src={url}
        alt={prompt}
      />
    {/each}
  </div>

  <!-- Fehlermeldung -->
</div>

<style>
  /* Andere Styles */

  .image {
    border: 3px solid black;
    border-radius: 8px;
  }

  .image-grid {
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

Ergänze ein zusätzliches Eingabefeld, mit dem die Menge an Bildern festgelegt werden kann, die bei jedem Klick auf den Button generiert werden sollen.

#### Hilfestellung

Die `generate`-Funktion, die wir für die Erstellung der Bilder nutzen, akzeptiert einen zusätzlichen Parameter, der die Anzahl der zu generierenden Bilder angibt. Hier ein Beispiel, wie die `generate`-Funktion mit dem neuen Parameter genutzt wird:

```svelte
<script>
  let amount = 4;
  let prompt = "Ein Baum auf einer Wiese im Herbst.";

  let urls = await generate(prompt, amount);
</script>
```

Die erzeugte Liste von URLs kann dann, wie zuvor, mit der `addImage`-Methode zur Liste der Bilder hinzugefügt werden:

```svelte
<script>
  addImage(urls, prompt);
</script>
```

Nachfolgend ein Beispiel für ein Eingabefeld in Svelte, das erlaubt, diese Anzahl zu bestimmen:

```svelte
<script>
  let amount = 1;
</script>

<input type="number" min="1" max="4" bind:value={amount}/>
```

Im `<script>`-Bereich definieren wir eine Variable namens `amount`. Danach fügen wir einen `<input>` ein, der vom Typ `number` ist, was bedeutet, dass man dort keine Buchstaben eingeben kann. Direkt danach legen wir fest, dass das Eingabefeld Werte zwischen mindestens 1 und höchstens 4 akzeptieren soll. Zum Schluss binden wir die Variable `amount` an das `value`-Attribut des Eingabefelds, sodass sich die Variable automatisch aktualisiert, wenn du die Zahl im Eingabefeld änderst.

<div class="solution">

```svelte
<script lang="ts">
  import { generate, error } from "./openai";
  import { addImage, images, removeImage } from "./gallery";

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
    <!-- Eingabefeld für die Bilderanzahl -->
    <input
      type="number"
      min="1"
      max="4"
      bind:value={amount}
    />
    <!-- Button zum Generieren -->
  </form>

  <!-- Anzeigen von Laden, Bildern & Fehlermeldungen -->
</div>
```

</div>

### 10. Input Styling

#### Aufgabe

Mach das neu erstellte Input-Feld optisch ansprechender, indem du etwas Randabstand und Innenabstand hinzufügst, damit es nicht mehr so platzlos aussieht.

#### Hilfestellung

Randabstand (Margin) und Innenabstand (Padding) dienen beide dazu, zusätzlichen Platz um ein Element herum zu schaffen.

Um das besser zu veranschaulichen, sieh dir dieses Bild an:

<img src="assets/padding-border-margin.png" alt="Padding, Border & Margin"/>

Betrachten wir zunächst die orangefarbene Fläche - das ist der Inhalt, z.B. bei einem `<p>`-Tag wäre das der Text.

Direkt um den Inhalt herum befindet sich eine gelbe Zone, das Padding. Diese Zone liegt zwischen dem Rahmen (Border) und dem Inhalt. Wenn du die Hintergrundfarbe eines Elements festlegst, wird sowohl der Inhalt als auch der Innenabstand (Padding) beeinflusst.

Die blauen Linien stellen den Rahmen (Border) dar und grenzen unser Element vom Rest der Webseite ab. Diesen Rahmen hast du eventuell bereits angepasst.

Die weiße Fläche, das Margin, definiert den Mindestabstand zum nächsten Element.

So wendest du Padding und Margin an:

```svelte
<div class="container">
  <!-- Inhalt -->
</div>

<style>
  .container {
    padding: 8px; /* Anpassung möglich */
    margin: 8px; /* Anpassung möglich */
  }
</style>
```

<div class="solution">

```svelte
<div class="app">
  <form
    class="form"
    on:submit|preventDefault
  >
    <!-- Eingabefeld für den Betrag -->
    <input
      class="amount"
      type="number"
      min="1"
      max="4"
      bind:value={amount}
    />
    <!-- Generiere-Button -->
  </form>

  <!-- Laden, Bilder & Fehlermeldungen -->
</div>

<style>
  /* Weitere Stile */

  .amount {
    padding: 8px; /* Anpassung möglich */
    margin: 8px; /* Anpassung möglich */
  }
</style>
```

</div>

## Schwere Aufgaben

### 11. Einzelne Bilder löschen

#### Aufgabe

Erstelle für jedes Bild einen Button, der das entsprechende Bild aus der Liste entfernt.

#### Hilfestellung

Wir haben bereits Attribute wie `alt` für das `<img>`-Element oder `bind:value` für das `<input>`-Element kennengelernt. `alt` und `value` sind die eigentlichen Attribute, während `bind:` das `value` an eine Variable bindet. Zusätzlich gibt es Modifikatoren, und einer davon ist `on:` für unsere Buttons. `on:click`, nimmt beispielsweise eine Funktion entgegen, die ausgeführt wird, wenn der Button geklickt wird.

Ein Beispiel dazu:

```svelte
<script>
  const handleClick = () => {
    // Code, der ausgeführt wird, wenn der Button geklickt wird.
  }
</script>

<button on:click={handleClick}>
  Button
</button>
```

Fügst du jetzt einen Button unter dem Bild ein, so wirst du feststellen, dass es einen Bild und daneben ein hellgrau unterlegtes Viereck gibt. Dieses Viereck ist unser Button. Nun möchten wir den Button in die obere linke Ecke des Bildes setzen.

In CSS gibt es ein `position` Attribut. Die Werte, die wir verwenden werden, sind `relative` und `absolute`. Diese alleine bewirken noch nichts; man muss zusätzliche Attribute einfügen, wie `top` und `left`. Bei `position: relative` beziehen sich `top` und `left` auf das umgebende Element, was bedeutet, dass `top` und `left` bei `0` in der oberen linken Ecke des Elements wären, vorausgesetzt kein anderes Element stört.

Bei `position: absolute` ist es ähnlich, mit dem Unterschied, dass andere Elemente ignoriert werden und die Positionierung vom nächsten relativ positionierten Element ausgeht. Das ist meist die ganze Webseite.

Indem wir einen `<div>` um das Bild und den Button legen und diesen relativ positionieren, können wir dem Button eine absolute Position geben und `top` sowie `left` auf `0` setzen. Das Ergebnis ist, dass die Bilder wie zuvor im zweispaltigen Raster aufgereiht bleiben und die Buttons oben links an den Bildern anhaften.

Siehe hier ein Beispiel zum Veranschaulichen:

```svelte
<div class="image-container">
  <img src="some_url"/>
  <button class="delete-button">Löschen</button>
</div>

<style>
  .image-container {
    position: relative;
  }

  .delete-button {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
```

Nun weißt du, wie du einen Button erstellen, ihn positionieren und Funktionen auf Knopfdruck ausführen kannst. Aber wir müssen noch klären, welche Funktion ausgeführt werden soll.

Wir stellen dir die Funktion `removeImage` bereit. Diese nimmt eine URL entgegen und entfernt das entsprechende Bild aus der Liste. So kannst du sie verwenden:

```svelte
<script>
  let url = "url1";

  removeImage(url);
</script>
```

<details>
<summary>TIPP</summary>

Falls du nicht sicher bist, wie du die Funktion einsetzen kannst, sieh dir dieses Beispiel für das `on:click` Attribut an:

```svelte
<script>
  let url = "url1";
</script>

<button on:click={() => removeImage(url)}>
  Löschen
</button>
```

</details>

<div class="solution">

```svelte

<div class="app">
  <!-- Titel, Formular & Ladeanzeige -->

  <div class="image-grid">
    {#each $images as { url, prompt }}
      <div class="image-container">
        <img
          class="image"
          src={url}
          alt={prompt}
        />
        <button
          class="delete-button"
          on:click={() => removeImage(url)}>Löschen</button
        >
      </div>
    {/each}
  </div>

  <!-- Fehlermeldung -->
</div>

<style>
  .image-container {
    position: relative;
  }

  .delete-button {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
```

</div>
