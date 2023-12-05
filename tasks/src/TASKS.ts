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
<h3 id="lade-indikator-hinzufügen">5. Lade-Indikator hinzufügen</h3>
<h4 id="aufgabe-4">Aufgabe</h4>
<p>Ein Lade-Indikator wird verwendet, um anzuzeigen, dass etwas gerade
geladen wird.</p>
<p>Hier siehst du ein Beispiel dafür:</p>
<p><img src="assets/loading-indicator.gif" alt="Lade-Indikator" /></p>
<p>In deinem Fall soll jedoch ein Text eingesetzt werden, um zu
signalisieren, dass das Bild momentan erstellt wird.</p>
<h4 id="hilfestellung-4">Hilfestellung</h4>
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
<h3 id="dynamischer-alt-text-hinzufügen">6. Dynamischer Alt Text
hinzufügen</h3>
<h4 id="aufgabe-5">Aufgabe</h4>
<p>Ein Alt-Text ist bei Bildern im Internet wichtig, falls das Bild
nicht geladen werden kann oder für Personen mit Sehbehinderungen, die
auf Deine Webseite zugreifen. Ersteres kann z. B. geschehen, wenn die
Internetverbindung zu langsam ist oder das Bild aus irgendeinem Grund
nicht mehr verfügbar ist.</p>
<p>Setze den Alt-Text des Bildes auf den Text des Prompts.</p>
<h4 id="hilfestellung-5">Hilfestellung</h4>
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
<h2 id="mittlere-aufgaben">Mittlere Aufgaben</h2>
<p>Wir empfehlen den Chatbot spätestens hier zu gebrauchen!</p>
<h3 id="bilder-galerie-erstellen">7. Bilder Galerie erstellen</h3>
<h4 id="aufgabe-6">Aufgabe</h4>
<p>Speichere jedes erzeugte Bild zusammen mit dem dazugehörigen
Textbefehl und zeige anschließend alle Bilder aus der Liste an.</p>
<h4 id="hilfestellung-6">Hilfestellung</h4>
<p>Wenn du eine Liste in Svelte vorliegen hast, kannst du diese so
durchlaufen, dass wir jedes Element der Liste – in unserem Fall ein Bild
– auf dem Bildschirm anzeigen.</p>
<pre class="svelte"><code>&lt;script&gt;
  let imageList = [&quot;url1&quot;, &quot;url2&quot;, &quot;url3&quot;];
&lt;/script&gt;

{#each imageList as url}
  &lt;img src={url} /&gt;
{/each}</code></pre>
<p>Beachte dabei, dass die geschweiften Klammern um <code>each</code>
genauso wie bei <code>{#if} ... {/if}</code> verwendet werden.</p>
<p>Das erste Element nach <code>each</code> repräsentiert die Liste, die
wir durchgehen wollen. Dann folgt ein <code>as</code> und eine neue
Variable, die wir hier <code>url</code> nennen. Innerhalb des
<code>each</code>-Blocks können wir die Variable <code>url</code>
verwenden, um Svelte jedes Bild in einem <code>&lt;img&gt;</code>-Tag
anzeigen zu lassen.</p>
<p>Eine <code>addImage</code>-Funktion haben wir dir bereits zur
Verfügung gestellt, um Bilder einer bestehenden Liste hinzuzufügen. So
kannst du die <code>addImage</code>-Funktion verwenden:</p>
<pre class="svelte"><code>&lt;script&gt;
   // Das wäre dein Textbefehl, den du immer wieder ändern kannst.
  let prompt = &quot;Ein Baum auf einer Wiese im Herbst.&quot;;
   // Das wäre die URL, die du von der Generierungsfunktion erhältst.
  let url = &quot;url1&quot;;

  // So rufst du die addImage-Funktion auf.
  addImage(url, prompt);
&lt;/script&gt;</code></pre>
<p>Diese spezielle Liste haben wir dir ebenfalls bereits bereitgestellt
und du kannst sie folgendermaßen nutzen:</p>
<pre class="svelte"><code>&lt;!-- $images ist unsere Liste, in der jede URL eines Bildes und der dazugehörige Textbefehl gespeichert ist. --&gt;
{#each $images as { url, prompt }}
  &lt;img src={url} alt={prompt} /&gt;
{/each}</code></pre>
<div class="solution">
<pre class="svelte"><code>&lt;script lang=&quot;ts&quot;&gt;
  import { generate, error } from &quot;./openai&quot;;
  import { addImage, images, removeImage } from &quot;./gallery&quot;;

  let source = &quot;&quot;;

  let prompt = &quot;Eine siamesische Katze mit blauen Augen.&quot;;

  let isGenerating = false;

  const handleGenerate = async () =&gt; {
    if (isGenerating) return;

    isGenerating = true;

    const url = await generate(prompt);
    addImage(url, prompt);

    isGenerating = false;
  };
&lt;/script&gt;

&lt;div class=&quot;app&quot;&gt;
  &lt;!-- Form &amp; Loading Indikator --&gt;

  {#each $images as { url, prompt }}
    &lt;img
      class=&quot;image&quot;
      src={url}
      alt={prompt}
    /&gt;
  {/each}

  &lt;!-- Fehlermeldung --&gt;
&lt;/div&gt;</code></pre>
</div>
<h3 id="styling-der-galerie">8. Styling der Galerie</h3>
<h4 id="aufgabe-7">Aufgabe</h4>
<p>Passe das Design der Bildergalerie an, sodass zwei Bilder
nebeneinander und in derselben Größe dargestellt werden.</p>
<h4 id="hilfestellung-7">Hilfestellung</h4>
<p>Wenn du mehrere Elemente in einem Raster darstellen möchtest, kannst
du es wie folgt machen:</p>
<pre class="svelte"><code>&lt;div class=&quot;grid&quot;&gt;
  &lt;p&gt;Paragraph 1&lt;/p&gt;
  &lt;p&gt;Paragraph 2&lt;/p&gt;
  &lt;p&gt;Paragraph 3&lt;/p&gt;
  &lt;p&gt;Paragraph 4&lt;/p&gt;
  &lt;p&gt;Paragraph 5&lt;/p&gt;
&lt;/div&gt;

&lt;style&gt;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    overflow-y: scroll;
  }
&lt;/style&gt;</code></pre>
<p>Mit diesem CSS werden die fünf Absätze so angeordnet, dass immer zwei
nebeneinanderstehen und einen Abstand von 8 Pixel zueinander haben. Das
“1fr 1fr” stellt sicher, dass das erste Element im Raster genauso viel
Platz einnimmt wie das zweite Element. Die Einstellung
<code>overflow-y: scroll</code> sorgt dafür, dass Inhalte, die in der
Höhe über den Rand des Rasters hinausgehen, verborgen bleiben und durch
Scrollen mit dem Mausrad oder Trackpad zugänglich gemacht werden
können.</p>
<p>Vergiss nicht, den Bildern die feste Breite zu entziehen und sie
stattdessen vom Raster bestimmen zu lassen.</p>
<details>
<summary>
TIPP
</summary>
<p>Hier findest du das Styling für die Bilder.</p>
<pre class="svelte"><code>&lt;style&gt;
  .image {
    width: 768px;
    border: 3px solid black;
    border-radius: 8px;
  }
&lt;/style&gt;</code></pre>
</details>
<div class="solution">
<pre class="svelte"><code>&lt;div class=&quot;app&quot;&gt;
  &lt;!-- Formular &amp; Laden --&gt;

  &lt;div class=&quot;image-grid&quot;&gt;
    {#each $images as { url, prompt }}
      &lt;img
        class=&quot;image&quot;
        src={url}
        alt={prompt}
      /&gt;
    {/each}
  &lt;/div&gt;

  &lt;!-- Fehlermeldung --&gt;
&lt;/div&gt;

&lt;style&gt;
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
&lt;/style&gt;</code></pre>
</div>
<h3 id="mehrere-bilder-auf-einmal">9. Mehrere Bilder auf einmal</h3>
<h4 id="aufgabe-8">Aufgabe</h4>
<p>Ergänze ein zusätzliches Eingabefeld, mit dem die Menge an Bildern
festgelegt werden kann, die bei jedem Klick auf den Button generiert
werden sollen.</p>
<h4 id="hilfestellung-8">Hilfestellung</h4>
<p>Die <code>generate</code>-Funktion, die wir für die Erstellung der
Bilder nutzen, akzeptiert einen zusätzlichen Parameter, der die Anzahl
der zu generierenden Bilder angibt. Hier ein Beispiel, wie die
<code>generate</code>-Funktion mit dem neuen Parameter genutzt wird:</p>
<pre class="svelte"><code>&lt;script&gt;
  let amount = 4;
  let prompt = &quot;Ein Baum auf einer Wiese im Herbst.&quot;;

  let urls = await generate(prompt, amount);
&lt;/script&gt;</code></pre>
<p>Die erzeugte Liste von URLs kann dann, wie zuvor, mit der
<code>addImage</code>-Methode zur Liste der Bilder hinzugefügt
werden:</p>
<pre class="svelte"><code>&lt;script&gt;
  addImage(urls, prompt);
&lt;/script&gt;</code></pre>
<p>Nachfolgend ein Beispiel für ein Eingabefeld in Svelte, das erlaubt,
diese Anzahl zu bestimmen:</p>
<pre class="svelte"><code>&lt;script&gt;
  let amount = 1;
&lt;/script&gt;

&lt;input type=&quot;number&quot; min=&quot;1&quot; max=&quot;4&quot; bind:value={amount}/&gt;</code></pre>
<p>Im <code>&lt;script&gt;</code>-Bereich definieren wir eine Variable
namens <code>amount</code>. Danach fügen wir einen
<code>&lt;input&gt;</code> ein, der vom Typ <code>number</code> ist, was
bedeutet, dass man dort keine Buchstaben eingeben kann. Direkt danach
legen wir fest, dass das Eingabefeld Werte zwischen mindestens 1 und
höchstens 4 akzeptieren soll. Zum Schluss binden wir die Variable
<code>amount</code> an das <code>value</code>-Attribut des Eingabefelds,
sodass sich die Variable automatisch aktualisiert, wenn du die Zahl im
Eingabefeld änderst.</p>
<div class="solution">
<pre class="svelte"><code>&lt;script lang=&quot;ts&quot;&gt;
  import { generate, error } from &quot;./openai&quot;;
  import { addImage, images, removeImage } from &quot;./gallery&quot;;

  let source = &quot;&quot;;

  let prompt = &quot;Eine siamesische Katze mit blauen Augen.&quot;;

  let isGenerating = false;

  let amount = 1;

  const handleGenerate = async () =&gt; {
    if (isGenerating) return;

    isGenerating = true;

    const url = await generate(prompt, amount);
    addImage(url, prompt);

    isGenerating = false;
  };
&lt;/script&gt;

&lt;div class=&quot;app&quot;&gt;
  &lt;form
    class=&quot;form&quot;
    on:submit|preventDefault
  &gt;
    &lt;!-- Eingabefeld für die Bilderanzahl --&gt;
    &lt;input
      type=&quot;number&quot;
      min=&quot;1&quot;
      max=&quot;4&quot;
      bind:value={amount}
    /&gt;
    &lt;!-- Button zum Generieren --&gt;
  &lt;/form&gt;

  &lt;!-- Anzeigen von Laden, Bildern &amp; Fehlermeldungen --&gt;
&lt;/div&gt;</code></pre>
</div>
<h3 id="input-styling">10. Input Styling</h3>
<h4 id="aufgabe-9">Aufgabe</h4>
<p>Mach das neu erstellte Input-Feld optisch ansprechender, indem du
etwas Randabstand und Innenabstand hinzufügst, damit es nicht mehr so
platzlos aussieht.</p>
<h4 id="hilfestellung-9">Hilfestellung</h4>
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
<pre class="svelte"><code>&lt;div class=&quot;app&quot;&gt;
  &lt;form
    class=&quot;form&quot;
    on:submit|preventDefault
  &gt;
    &lt;!-- Eingabefeld für den Betrag --&gt;
    &lt;input
      class=&quot;amount&quot;
      type=&quot;number&quot;
      min=&quot;1&quot;
      max=&quot;4&quot;
      bind:value={amount}
    /&gt;
    &lt;!-- Generiere-Button --&gt;
  &lt;/form&gt;

  &lt;!-- Laden, Bilder &amp; Fehlermeldungen --&gt;
&lt;/div&gt;

&lt;style&gt;
  /* Weitere Stile */

  .amount {
    padding: 8px; /* Anpassung möglich */
    margin: 8px; /* Anpassung möglich */
  }
&lt;/style&gt;</code></pre>
</div>
<h2 id="schwere-aufgaben">Schwere Aufgaben</h2>
<h3 id="einzelne-bilder-löschen">11. Einzelne Bilder löschen</h3>
<h4 id="aufgabe-10">Aufgabe</h4>
<p>Erstelle für jedes Bild einen Button, der das entsprechende Bild aus
der Liste entfernt.</p>
<h4 id="hilfestellung-10">Hilfestellung</h4>
<p>Wir haben bereits Attribute wie <code>alt</code> für das
<code>&lt;img&gt;</code>-Element oder <code>bind:value</code> für das
<code>&lt;input&gt;</code>-Element kennengelernt. <code>alt</code> und
<code>value</code> sind die eigentlichen Attribute, während
<code>bind:</code> das <code>value</code> an eine Variable bindet.
Zusätzlich gibt es Modifikatoren, und einer davon ist <code>on:</code>
für unsere Buttons. <code>on:click</code>, nimmt beispielsweise eine
Funktion entgegen, die ausgeführt wird, wenn der Button geklickt
wird.</p>
<p>Ein Beispiel dazu:</p>
<pre class="svelte"><code>&lt;script&gt;
  const handleClick = () =&gt; {
    // Code, der ausgeführt wird, wenn der Button geklickt wird.
  }
&lt;/script&gt;

&lt;button on:click={handleClick}&gt;
  Button
&lt;/button&gt;</code></pre>
<p>Fügst du jetzt einen Button unter dem Bild ein, so wirst du
feststellen, dass es einen Bild und daneben ein hellgrau unterlegtes
Viereck gibt. Dieses Viereck ist unser Button. Nun möchten wir den
Button in die obere linke Ecke des Bildes setzen.</p>
<p>In CSS gibt es ein <code>position</code> Attribut. Die Werte, die wir
verwenden werden, sind <code>relative</code> und <code>absolute</code>.
Diese alleine bewirken noch nichts; man muss zusätzliche Attribute
einfügen, wie <code>top</code> und <code>left</code>. Bei
<code>position: relative</code> beziehen sich <code>top</code> und
<code>left</code> auf das umgebende Element, was bedeutet, dass
<code>top</code> und <code>left</code> bei <code>0</code> in der oberen
linken Ecke des Elements wären, vorausgesetzt kein anderes Element
stört.</p>
<p>Bei <code>position: absolute</code> ist es ähnlich, mit dem
Unterschied, dass andere Elemente ignoriert werden und die
Positionierung vom nächsten relativ positionierten Element ausgeht. Das
ist meist die ganze Webseite.</p>
<p>Indem wir einen <code>&lt;div&gt;</code> um das Bild und den Button
legen und diesen relativ positionieren, können wir dem Button eine
absolute Position geben und <code>top</code> sowie <code>left</code> auf
<code>0</code> setzen. Das Ergebnis ist, dass die Bilder wie zuvor im
zweispaltigen Raster aufgereiht bleiben und die Buttons oben links an
den Bildern anhaften.</p>
<p>Siehe hier ein Beispiel zum Veranschaulichen:</p>
<pre class="svelte"><code>&lt;div class=&quot;image-container&quot;&gt;
  &lt;img src=&quot;some_url&quot;/&gt;
  &lt;button class=&quot;delete-button&quot;&gt;Löschen&lt;/button&gt;
&lt;/div&gt;

&lt;style&gt;
  .image-container {
    position: relative;
  }

  .delete-button {
    position: absolute;
    top: 0;
    left: 0;
  }
&lt;/style&gt;</code></pre>
<p>Nun weißt du, wie du einen Button erstellen, ihn positionieren und
Funktionen auf Knopfdruck ausführen kannst. Aber wir müssen noch klären,
welche Funktion ausgeführt werden soll.</p>
<p>Wir stellen dir die Funktion <code>removeImage</code> bereit. Diese
nimmt eine URL entgegen und entfernt das entsprechende Bild aus der
Liste. So kannst du sie verwenden:</p>
<pre class="svelte"><code>&lt;script&gt;
  let url = &quot;url1&quot;;

  removeImage(url);
&lt;/script&gt;</code></pre>
<details>
<summary>
TIPP
</summary>
<p>Falls du nicht sicher bist, wie du die Funktion einsetzen kannst,
sieh dir dieses Beispiel für das <code>on:click</code> Attribut an:</p>
<pre class="svelte"><code>&lt;script&gt;
  let url = &quot;url1&quot;;
&lt;/script&gt;

&lt;button on:click={() =&gt; removeImage(url)}&gt;
  Löschen
&lt;/button&gt;</code></pre>
</details>
<div class="solution">
<pre class="svelte"><code>
&lt;div class=&quot;app&quot;&gt;
  &lt;!-- Titel, Formular &amp; Ladeanzeige --&gt;

  &lt;div class=&quot;image-grid&quot;&gt;
    {#each $images as { url, prompt }}
      &lt;div class=&quot;image-container&quot;&gt;
        &lt;img
          class=&quot;image&quot;
          src={url}
          alt={prompt}
        /&gt;
        &lt;button
          class=&quot;delete-button&quot;
          on:click={() =&gt; removeImage(url)}&gt;Löschen&lt;/button
        &gt;
      &lt;/div&gt;
    {/each}
  &lt;/div&gt;

  &lt;!-- Fehlermeldung --&gt;
&lt;/div&gt;

&lt;style&gt;
  .image-container {
    position: relative;
  }

  .delete-button {
    position: absolute;
    top: 0;
    left: 0;
  }
&lt;/style&gt;</code></pre>
</div>
`;export default TASKS;