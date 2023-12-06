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

### 5. Platz schaffen

#### Aufgabe

Füge Margin und Padding dem Input und dem Button hinzu.

#### Hilfestellung

Du kannst die gleichen Klassen vor bei Aufgabe [4](#4-input--button-styling) verwenden.

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
<style>
  .prompt-input {
    margin: 4px;
    padding: 4px;
  }

  .submit-button {
    margin: 4px;
    padding: 4px;
  }
</style>
```

</div>

### 6. Lösch Button Styling

#### Aufgabe

Setze den Hintergrund des Lösch Buttons auf rot.

#### Hilfestellung

Dir wurde bereits eine Klasse zur Verfügung gestellt.

```svelte
<style>
  .delete-button {
    /* Füge deine Eigenschaften hier ein. */
  }
</style>
```

<div class="solution">

```svelte
<style>
  .delete-button {
    background: red;
  }
</style>
```

</div>

### 7. Lösch Button Platz

#### Aufgabe

Füge wie bei Aufgabe [5](#5-platz-schaffen) Platz um den Lösch Button herum.

#### Hilfestellung

Du kannst die gleiche Klasse wie bei Aufgabe [6](#6-lösch-button-styling)

<div class="solution">

```svelte
<style>
  .delete-button {
    padding: 4px;
    margin: 4px;
  }
</style>
```

</div>

### 8. Rand um die Bilder hinzufügen

#### Aufgabe

Füge einen Rand um jedes Bild und runde die Ecken ab.

#### Hilfestellung

Hierzu kannst du `border` und `border-radius` erneut benutzen.

<div class="solution">

```svelte
<style>
  .image-container {
    border: 1px solid black;
    border-radius: 4px;
  }
</style>
```

</div>

### 9. Bilder Grid erstellen

#### Aufgabe

Füge ein Grid um die Bildergalerie hinzu.

#### Hilfestellung

Hierzu musst du die Bilder Galerie in einem `<div>` ummanteln.

Dazu musst du ihm eine Klasse geben und folgende Styles auf dieser Klasse setzen

```svelte
<style>
  .image-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
</style>
```

<div class="solution">

```svelte
<style>
  .image-gallery /* Can change */ {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
</style>
```

</div>

## Schwere Aufgaben

Wir empfehlen den Chatbot spätestens hier zu gebrauchen!

### 10. Lade-Indikator hinzufügen

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

### 11. Dynamischer Alt Text hinzufügen

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
