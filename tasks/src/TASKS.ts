const TASKS = `<h1 id="schnuppertag-bei-der-liip">Schnuppertag bei der Liip</h1>
<p>Heute lernst du, wie man mithilfe von Künstlicher Intelligenz Bilder
generiert. Du wirst erfahren, wie man ein HTML-Element erstellt, es
stilvoll gestaltet und es mit JavaScript reaktiv macht.</p>
<p>Nachdem du das Programm gestartet hast, öffnen sich drei neue
Browser-Tabs. Im ersten Tab, betitelt Bilder Generierung, findest du die
Webseite, auf der du praktisch arbeiten wirst. Der zweite Tab, Aufgaben,
enthält die dazugehörigen Übungen. Im dritten Tab, Svelte Chat, befindet
sich ein Chatbot, den du zur Unterstützung heranziehen kannst. Dieser
Chatbot kennt alle Aufgaben und deren Lösungen. Nutze den Chatbot, wenn
du Hilfe bei einer Aufgabe benötigst, oder kontaktiere uns direkt.</p>
<p>Beginne nun mit den Aufgaben, indem du den Tab Bilder Generierung
öffnest.</p>
<h2 id="einfache-aufgaben">Einfache Aufgaben</h2>
<h3 id="titel-hinzufügen">1. Titel hinzufügen</h3>
<h4 id="aufgabe">Aufgabe</h4>
<p>Füge der Webseite einen Titel mit dem Text
<code>Bild Generierung</code> hinzu.</p>
<h4 id="hilfestellung">Hilfestellung</h4>
<p>Ein Titel, auch Überschrift genannt, kann in HTML in sechs
verschiedenen Größen dargestellt werden:</p>
<pre class="svelte"><code>&lt;h1&gt;H1&lt;/h1&gt;
&lt;h2&gt;H2&lt;/h2&gt;
&lt;h3&gt;H3&lt;/h3&gt;
&lt;h4&gt;H4&lt;/h4&gt;
&lt;h5&gt;H5&lt;/h5&gt;
&lt;h6&gt;H6&lt;/h6&gt;</code></pre>
<p>Dabei ist <code>&lt;h1&gt;</code> die größte Überschrift und
<code>&lt;h6&gt;</code> die kleinste.</p>
<p>An folgender Stelle solltest du den Titel einfügen:</p>
<pre class="svelte"><code>&lt;div class=&quot;app&quot;&gt;
  &lt;h&gt;Dein Titel&lt;/h&gt;

  &lt;!-- Form, Bild &amp; Error --&gt;
&lt;/div&gt;</code></pre>
<p>Ersetze <code>&lt;h&gt;</code> durch ein geeignetes Überschrift-Tag,
indem du die passende Größe (1-6) wählst.</p>
<div class="solution">
<pre class="svelte"><code>&lt;div class=&quot;app&quot;&gt;
  &lt;h1&gt;Dein Titel&lt;/h1&gt;

  &lt;!-- Form, Image &amp; Error --&gt;
&lt;/div&gt;</code></pre>
</div>
<h3 id="button-text-ändern">2. Button Text ändern</h3>
<h4 id="aufgabe-1">Aufgabe</h4>
<p>Ändere die Beschriftung des Buttons, der momentan
<code>Generate</code> lautet.</p>
<h4 id="hilfestellung-1">Hilfestellung</h4>
<p>Ein Button, im HTML als <code>&lt;button&gt;</code> bezeichnet, sieht
wie folgt aus:</p>
<pre class="svelte"><code>&lt;button&gt;
  Button Beschriftung
&lt;/button&gt;</code></pre>
<p>Dabei ist <code>Button Beschriftung</code> der Text, der auf dem
Button dargestellt wird.</p>
<details>
<summary>
TIPP
</summary>
<p>Hier siehst du den Abschnitt, wo du die Beschriftung des Buttons
verändern kannst.</p>
<pre class="svelte"><code>&lt;button
  class=&quot;submit-button&quot;
  on:click={handleGenerate}
&gt;
  Neuer Button Text
&lt;/button&gt;</code></pre>
</details>
<div class="solution">
<pre class="svelte"><code>&lt;div class=&quot;app&quot;&gt;
  &lt;form
    class=&quot;form&quot;
    on:submit|preventDefault
  &gt;
    &lt;!-- Eingabeaufforderung --&gt;

    &lt;button
      class=&quot;submit-button&quot;
      on:click={handleGenerate}
    &gt;
      Neuer Button Text
    &lt;/button&gt;
  &lt;/form&gt;

  &lt;!-- Bild &amp; Fehlermeldung --&gt;
&lt;/div&gt;</code></pre>
</div>
<h3 id="anweisungstext-prompt-anpassen">3. Anweisungstext (Prompt)
anpassen</h3>
<h4 id="aufgabe-2">Aufgabe</h4>
<p>Vereinfache den aktuellen Prompt
<code>"Eine siamesische Katze mit blauen Augen."</code></p>
<p>Experimentiere ein wenig mit dem Prompt und betrachte, wie sich die
Ergebnisse verändern.</p>
<h4 id="hilfestellung-2">Hilfestellung</h4>
<p>Hier siehst du, wo du den Prompt verändern sollst.</p>
<pre class="svelte"><code>&lt;script lang=&quot;ts&quot;&gt;
  // Importiere notwendige Quellen und initialisiere Variablen.

  let prompt = &quot;Eine siamesische Katze mit blauen Augen.&quot;; // &lt;-- Hier Anpassungen vornehmen

  // Funktion zum Auslösen der Generierung
&lt;/script&gt;</code></pre>
<p>Verwende <code>let prompt</code> als Suchbegriff, nutze
<code>CTRL + F</code> auf Windows &amp; Linux oder
<code>Command + F</code> auf MacOS, um dies zu tun.</p>
<div class="solution">
<pre class="svelte"><code>&lt;script lang=&quot;ts&quot;&gt;
  let prompt = &quot;Ein neuer Prompt.&quot;;
&lt;/script&gt;</code></pre>
</div>
<h3 id="input-button-styling">4. Input &amp; Button Styling</h3>
<h4 id="aufgabe-3">Aufgabe</h4>
<p>Mit CSS kannst du die Erscheinung von HTML-Elementen anpassen,
einschließlich ihrer Farbe, Form und Position.</p>
<p>Deine Aufgabe ist es, die Textfarbe, Hintergrundfarbe und Rahmenfarbe
des Generierungsbuttons und des Eingabefelds für den Prompt zu
ändern.</p>
<h4 id="hilfestellung-3">Hilfestellung</h4>
<p>Zwei Klassen sind bereits vorgesehen und warten auf deine
Anpassungen.</p>
<pre class="svelte"><code>&lt;style&gt;
  .prompt-input {
    /* Füge deine Eigenschaften hier ein. */
  }

  .submit-button {
    /* Füge deine Eigenschaften hier ein. */
  }
&lt;/style&gt;</code></pre>
<details>
<summary>
TIPP
</summary>
<p>Du kannst Eigenschaften wie <code>background</code>,
<code>color</code> und <code>border</code> verwenden.</p>
<div class="sourceCode" id="cb10"><pre
class="sourceCode css"><code class="sourceCode css"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">.class</span> {</span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Du kannst die meisten Farben mit ihrem englischen Namen verwenden. */</span></span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a>  <span class="kw">background</span>: <span class="cn">red</span><span class="op">;</span></span>
<span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb10-5"><a href="#cb10-5" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Gilt auch für Textfarbe. */</span></span>
<span id="cb10-6"><a href="#cb10-6" aria-hidden="true" tabindex="-1"></a>  <span class="kw">color</span>: <span class="cn">black</span><span class="op">;</span></span>
<span id="cb10-7"><a href="#cb10-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb10-8"><a href="#cb10-8" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Der Rahmen (border) setzt sich aus drei Werten zusammen. */</span></span>
<span id="cb10-9"><a href="#cb10-9" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Erst wird die Dicke angegeben, z.B. 1px. */</span></span>
<span id="cb10-10"><a href="#cb10-10" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Danach folgt der Stil des Rahmens. &#39;solid&#39; für eine durchgezogene Linie, es gibt aber auch &#39;dotted&#39; für gepunktet oder &#39;dashed&#39; für gestrichelt. */</span></span>
<span id="cb10-11"><a href="#cb10-11" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Zu guter Letzt die Farbe des Rahmens, die wie bei background und color, in den meisten Fällen in Englisch angegeben wird. */</span></span>
<span id="cb10-12"><a href="#cb10-12" aria-hidden="true" tabindex="-1"></a>  <span class="kw">border</span>: <span class="dv">1</span><span class="dt">px</span> <span class="dv">solid</span> <span class="cn">black</span><span class="op">;</span></span>
<span id="cb10-13"><a href="#cb10-13" aria-hidden="true" tabindex="-1"></a>}</span></code></pre></div>
</details>
<div class="solution">
<pre class="svelte"><code>&lt;style&gt;
  .prompt-input {
    background: red;
    color: green;
  }

  .submit-button {
    background: orange;
    color: white;
  }
&lt;/style&gt;</code></pre>
</div>
<h3 id="platz-schaffen">5. Platz schaffen</h3>
<h4 id="aufgabe-4">Aufgabe</h4>
<p>Füge Margin und Padding dem Input und dem Button hinzu.</p>
<h4 id="hilfestellung-4">Hilfestellung</h4>
<p>Du kannst die gleichen Klassen vor bei Aufgabe <a
href="#4-input--button-styling">4</a> verwenden.</p>
<p>Randabstand (Margin) und Innenabstand (Padding) dienen beide dazu,
zusätzlichen Platz um ein Element herum zu schaffen.</p>
<p>Um das besser zu veranschaulichen, sieh dir dieses Bild an:</p>
<p><img src="assets/padding-border-margin.png" alt="Padding, Border & Margin"/></p>
<p>Betrachten wir zunächst die orangefarbene Fläche - das ist der
Inhalt, z.B. bei einem <code>&lt;p&gt;</code>-Tag wäre das der Text.</p>
<p>Direkt um den Inhalt herum befindet sich eine gelbe Zone, das
Padding. Diese Zone liegt zwischen dem Rahmen (Border) und dem Inhalt.
Wenn du die Hintergrundfarbe eines Elements festlegst, wird sowohl der
Inhalt als auch der Innenabstand (Padding) beeinflusst.</p>
<p>Die blauen Linien stellen den Rahmen (Border) dar und grenzen unser
Element vom Rest der Webseite ab. Diesen Rahmen hast du eventuell
bereits angepasst.</p>
<p>Die weiße Fläche, das Margin, definiert den Mindestabstand zum
nächsten Element.</p>
<p>So wendest du Padding und Margin an:</p>
<pre class="svelte"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;!-- Inhalt --&gt;
&lt;/div&gt;

&lt;style&gt;
  .container {
    padding: 8px; /* Anpassung möglich */
    margin: 8px; /* Anpassung möglich */
  }
&lt;/style&gt;</code></pre>
<div class="solution">
<pre class="svelte"><code>&lt;style&gt;
  .prompt-input {
    margin: 4px;
    padding: 4px;
  }

  .submit-button {
    margin: 4px;
    padding: 4px;
  }
&lt;/style&gt;</code></pre>
</div>
<h3 id="lösch-button-styling">6. Lösch Button Styling</h3>
<h4 id="aufgabe-5">Aufgabe</h4>
<p>Setze den Hintergrund des Lösch Buttons auf rot.</p>
<h4 id="hilfestellung-5">Hilfestellung</h4>
<p>Dir wurde bereits eine Klasse zur Verfügung gestellt.</p>
<pre class="svelte"><code>&lt;style&gt;
  .delete-button {
    /* Füge deine Eigenschaften hier ein. */
  }
&lt;/style&gt;</code></pre>
<div class="solution">
<pre class="svelte"><code>&lt;style&gt;
  .delete-button {
    background: red;
  }
&lt;/style&gt;</code></pre>
</div>
<h3 id="lösch-button-platz">7. Lösch Button Platz</h3>
<h4 id="aufgabe-6">Aufgabe</h4>
<p>Füge wie bei Aufgabe <a href="#5-platz-schaffen">5</a> Platz um den
Lösch Button herum.</p>
<h4 id="hilfestellung-6">Hilfestellung</h4>
<p>Du kannst die gleiche Klasse wie bei Aufgabe <a
href="#6-lösch-button-styling">6</a></p>
<div class="solution">
<pre class="svelte"><code>&lt;style&gt;
  .delete-button {
    padding: 4px;
    margin: 4px;
  }
&lt;/style&gt;</code></pre>
</div>
<h3 id="rand-um-die-bilder-hinzufügen">8. Rand um die Bilder
hinzufügen</h3>
<h4 id="aufgabe-7">Aufgabe</h4>
<p>Füge einen Rand um jedes Bild und runde die Ecken ab.</p>
<h4 id="hilfestellung-7">Hilfestellung</h4>
<p>Hierzu kannst du <code>border</code> und <code>border-radius</code>
erneut benutzen.</p>
<div class="solution">
<pre class="svelte"><code>&lt;style&gt;
  .image-container {
    border: 1px solid black;
    border-radius: 4px;
  }
&lt;/style&gt;</code></pre>
</div>
<h3 id="bilder-grid-erstellen">9. Bilder Grid erstellen</h3>
<h4 id="aufgabe-8">Aufgabe</h4>
<p>Füge ein Grid um die Bildergalerie hinzu.</p>
<h4 id="hilfestellung-8">Hilfestellung</h4>
<p>Hierzu musst du die Bilder Galerie in einem <code>&lt;div&gt;</code>
ummanteln.</p>
<p>Dazu musst du ihm eine Klasse geben und folgende Styles auf dieser
Klasse setzen</p>
<pre class="svelte"><code>&lt;style&gt;
  .image-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
&lt;/style&gt;</code></pre>
<div class="solution">
<pre class="svelte"><code>&lt;style&gt;
  .image-gallery /* Can change */ {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
&lt;/style&gt;</code></pre>
</div>
<h2 id="schwere-aufgaben">Schwere Aufgaben</h2>
<p>Wir empfehlen den Chatbot spätestens hier zu gebrauchen!</p>
<h3 id="lade-indikator-hinzufügen">10. Lade-Indikator hinzufügen</h3>
<h4 id="aufgabe-9">Aufgabe</h4>
<p>Ein Lade-Indikator wird verwendet, um anzuzeigen, dass etwas gerade
geladen wird.</p>
<p>Hier siehst du ein Beispiel dafür:</p>
<p><img src="assets/loading-indicator.gif" alt="Lade-Indikator" /></p>
<p>In deinem Fall soll jedoch ein Text eingesetzt werden, um zu
signalisieren, dass das Bild momentan erstellt wird.</p>
<h4 id="hilfestellung-9">Hilfestellung</h4>
<p>Nutze für diese Aufgabe eine Variable und eine
<code>if</code>-Bedingung.</p>
<p>In Svelte könntest du das so umsetzen:</p>
<pre class="svelte"><code>&lt;script&gt;
  let loading = false;

  const generate = () =&gt; {
    if (loading) {
      return;
    }

    loading = true;

    // Hier den restlichen Code einfügen

    loading = false;
  }
&lt;/script&gt;

{#if loading}
  &lt;p&gt;Wird geladen...&lt;/p&gt;
{/if}

&lt;button on:click={generate}&gt;
  Bild erstellen
&lt;/button&gt;</code></pre>
<p>Anfänglich wird die Variable <code>loading</code> auf
<code>false</code> gesetzt, was bedeutet, dass aktuell nichts geladen
wird.</p>
<p>Innerhalb der <code>generate</code>-Funktion wird dieser Wert zu
Beginn auf <code>true</code> geändert, um den Ladevorgang anzuzeigen.
Sobald der Prozess abgeschlossen ist, setzen wir <code>loading</code>
zurück auf <code>false</code>. Zudem prüfen wir zu Beginn der Funktion,
ob <code>loading</code> bereits <code>true</code> ist, um die Funktion
gegebenenfalls nicht erneut auszuführen.</p>
<p>Die <code>generate</code>-Funktion wird aktiviert, wenn der Nutzer
auf den Button klickt. Mit <code>on:click</code> legen wir fest, dass
die Funktion <code>generate</code> ausgeführt werden soll, sobald der
Button betätigt wird.</p>
<p>Über dem Button wird geprüft, ob <code>loading</code> den Wert
<code>true</code> hat, und falls ja, zeigen wir einen Absatz
(<code>&lt;p&gt;</code>) mit dem Texthinweis
<code>Wird geladen...</code> an.</p>
<p>Der Bereich innerhalb von <code>&lt;script&gt;</code> ist JavaScript,
während alles außerhalb HTML entspricht. Variablen sind dabei reaktiv,
was bedeutet, dass eine im <code>&lt;script&gt;</code>-Teil erstellte
und später veränderte Variable ihre Aktualisierung unmittelbar im
zugehörigen HTML wiedergibt. Dies erklärt den Begriff
<strong>Reaktiv</strong>, da das HTML automatisch auf jegliche
Änderungen im JavaScript <strong>reagiert</strong>.</p>
<div class="solution">
<pre class="svelte"><code>&lt;script lang=&quot;ts&quot;&gt;
  import { generate, error } from &quot;./openai&quot;;
  import { addImage, images, removeImage } from &quot;./gallery&quot;;

  let source = &quot;&quot;;

  let prompt = &quot;Eine siamesische Katze mit blauen Augen.&quot;;

  let isGenerating = false;

  const handleGenerate = async () =&gt; {
    if (isGenerating) {
      return;
    };

    isGenerating = true;

    source = await generate(prompt);

    isGenerating = false;
  };
&lt;/script&gt;

&lt;div class=&quot;app&quot;&gt;
  &lt;!-- Formular --&gt;

  {#if isGenerating}
    &lt;p&gt;Wird generiert...&lt;/p&gt;
  {/if}

  &lt;!-- Bild &amp; Fehlermeldung --&gt;
&lt;/div&gt;</code></pre>
</div>
<h3 id="dynamischer-alt-text-hinzufügen">11. Dynamischer Alt Text
hinzufügen</h3>
<h4 id="aufgabe-10">Aufgabe</h4>
<p>Ein Alt-Text ist bei Bildern im Internet wichtig, falls das Bild
nicht geladen werden kann oder für Personen mit Sehbehinderungen, die
auf Deine Webseite zugreifen. Ersteres kann z. B. geschehen, wenn die
Internetverbindung zu langsam ist oder das Bild aus irgendeinem Grund
nicht mehr verfügbar ist.</p>
<p>Setze den Alt-Text des Bildes auf den Text des Prompts.</p>
<h4 id="hilfestellung-10">Hilfestellung</h4>
<p>In Svelte ist es möglich, den Wert einer Variablen dynamisch als
Attribut in Elemente einzufügen.</p>
<p>Hier ein Beispiel:</p>
<pre class="svelte"><code>&lt;script&gt;
  let altText = &quot;Ein Bild von einer Katze&quot;;
&lt;/script&gt;

&lt;img alt=&quot;{altText}&quot; /&gt;</code></pre>
<p>Indem man <code>{</code> und <code>}</code> in einem Attribut
verwendet, kann man Variablen einfügen.</p>
<div class="solution">
<pre class="svelte"><code>&lt;div class=&quot;app&quot;&gt;
  &lt;!-- Formular &amp; Laden --&gt;

  &lt;img
    class=&quot;image&quot;
    src={url}
    alt={prompt}
  /&gt;

  &lt;!-- Fehlermeldung --&gt;
&lt;/div&gt;</code></pre>
</div>
`;export default TASKS;