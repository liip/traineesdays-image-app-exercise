const TASKS = `<h1 id="schnuppertag-bei-der-liip">Schnuppertag bei der Liip</h1>
<h2 id="einfache-aufgaben">Einfache Aufgaben</h2>
<h3 id="titel">1. Titel</h3>
<p>Ein Titel, oder heading, gibt es in 6 grössen in HTML.</p>
<pre class="svelte"><code>&lt;h1&gt;H1&lt;/h1&gt;
&lt;h2&gt;H2&lt;/h2&gt;
&lt;h3&gt;H3&lt;/h3&gt;
&lt;h4&gt;H4&lt;/h4&gt;
&lt;h5&gt;H5&lt;/h5&gt;
&lt;h6&gt;H6&lt;/h6&gt;</code></pre>
<p>Hierbei ist zu beachten, dass <code>&lt;h1&gt;</code> der grösste ist
und <code>&lt;h6&gt;</code> der kleinste.</p>
<p>Deine Aufgabe ist es nun, einen Titel hinzuzufügen.</p>
<details>
<summary>
TIPP
</summary>
<pre class="svelte"><code>&lt;div class=&quot;app&quot;&gt;
  &lt;h1&gt;Bild generierung&lt;/h1&gt;

  &lt;!-- Form, Bild &amp; Error --&gt;
&lt;/div&gt;</code></pre>
</details>
<h3 id="knöpfe">2. Knöpfe</h3>
<p>Ein Knopf, in HTML auch <code>button</code>, ist wie folgt
aufgebaut:</p>
<pre class="svelte"><code>&lt;button&gt;
  Hello World!
&lt;/button&gt;</code></pre>
<p>Wobei <code>Hello World!</code> der text ist der angezeigt wird.</p>
<p>Deine Aufgabe ist es jetzt nun den Knopf zu finden, der gebraucht
wird um die Bilder zu generieren, und den Text in etwas passenderes
abzuändern.</p>
<details>
<summary>
TIPP
</summary>
<p>Das musst du suchen und <code>Generate</code> ändern. Du findest es
in der Mitte der Datei.</p>
<pre class="svelte"><code>&lt;button
  class=&quot;submit-button&quot;
  on:click={handleGenerate}
&gt;
  Generate
&lt;/button&gt;</code></pre>
</details>
<h3 id="input-knopf-styling">3. Input &amp; Knopf Styling</h3>
<p>CSS, ausgeschrieben <code>Cascading Style Sheets</code>, benutzt man
um Farbe, Form und Position von HTML Elementen zu ändern. CSS kann sehr
mächtig sein und komplex jedoch kann man auch sehr einfach nur die
Farben ändern.</p>
<p>Deine Aufgabe ist es herum zu spielen mit dem styling des Inputs und
des Knopfes.</p>
<details>
<summary>
TIPP
</summary>
<p>Du kannst Eigenschaften wie <code>background</code>,
<code>color</code> und <code>border</code> benutzen jedoch darfst du
auch andere benutzen.</p>
<p>Das was du editieren musst, findest du im <code>&lt;style&gt;</code>
tag der zu unterst in der Datei ist.</p>
<pre class="svelte"><code>&lt;style&gt;
  .custom-input {
    /* Deine Eigenschaften hier. */
  }

  .custom-button {
    /* Deine Eigenschaften hier. */
  }

  /* Andere Selektoren. */
&lt;/style&gt;</code></pre>
<p>Damit du nicht noch nachschauen musst wie du <code>background</code>,
<code>color</code> und <code>border</code> benutzt, hier ein paar
Beispiele.</p>
<div class="sourceCode" id="cb6"><pre
class="sourceCode css"><code class="sourceCode css"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">.class</span> {</span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Du kannst fast alle Farben auf Englisch angeben. */</span></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a>  <span class="kw">background</span>: <span class="cn">red</span><span class="op">;</span></span>
<span id="cb6-4"><a href="#cb6-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb6-5"><a href="#cb6-5" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Das gleiche wie beim Hintergrund. */</span></span>
<span id="cb6-6"><a href="#cb6-6" aria-hidden="true" tabindex="-1"></a>  <span class="kw">color</span>: <span class="cn">black</span><span class="op">;</span></span>
<span id="cb6-7"><a href="#cb6-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb6-8"><a href="#cb6-8" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Die border ist ein wenig komplexer. Sie besteht aus 3 Teilen. */</span></span>
<span id="cb6-9"><a href="#cb6-9" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Zuerst kommt die Dicke in pixel zum Beispiel. Hier 1px */</span></span>
<span id="cb6-10"><a href="#cb6-10" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Danach die Art der Border. Hier solid aber es geht auch dotted oder dashed für gepunktete oder gestrichelte Linien. */</span></span>
<span id="cb6-11"><a href="#cb6-11" aria-hidden="true" tabindex="-1"></a>  <span class="co">/* Und zuletzt die Farbe, die ist, wie bei background und color, fast alle Farben auf Englisch. */</span></span>
<span id="cb6-12"><a href="#cb6-12" aria-hidden="true" tabindex="-1"></a>  <span class="kw">border</span>: <span class="dv">1</span><span class="dt">px</span> <span class="dv">solid</span> <span class="cn">black</span><span class="op">;</span></span>
<span id="cb6-13"><a href="#cb6-13" aria-hidden="true" tabindex="-1"></a>}</span></code></pre></div>
</details>
<h3 id="lade-indikator">4. Lade Indikator</h3>
<p>Das angezeigt wird wann das Bild generiert wird sollst du ein Lade
Indikator einfügen. Um das zu erreichen musst du eine Variable
hinzufügen welche du verwenden sollst um den Ladeindikator
anzuzeigen.</p>
<details>
<summary>
TIPP
</summary>
<p>Hier was du machen musst</p>
<pre class="svelte"><code>&lt;script&gt;
  // Anderer code...

  let isGenerating = false; // Neu

  const handleGenerate = async () =&gt; {
    if (isGenerating) return; // Neu

    isGenerating = true; // Neu

    source = await generate(prompt);

    isGenerating = false; // Neu
  };
&lt;/script&gt;

&lt;div class=&quot;app&quot;&gt;
  &lt;!-- Form --&gt;

  &lt;!-- Neu --&gt;
  {#if isGenerating}
    &lt;p&gt;Wird generiert...&lt;/p&gt;
  {/if}

  &lt;!-- Bild und Error --&gt;
&lt;/div&gt;</code></pre>
<p>Das ist viel Code aber ich erklär es dir kurz.</p>
<h4 id="javascript">JavaScript</h4>
<p>Mit <code>let isGenerating = false;</code> erstellst du eine Variable
mit Namen <code>isGenerating</code> und dem Wert <code>false</code>.</p>
<p>In der <code>handleGenerate</code> Methode schaust du ob schon ein
Bild am generieren ist, falls ja, dann beende die Methode, falls nein
geh weiter. Das wäre <code>if (isGenerating) return;</code></p>
<p>Jetzt setzt du <code>isGenerating</code> auf <code>true</code> was
dazu führt, dass wenn du den Knopf ein zweites Mal drückst, dass nichts
passiert und wir auch wissen wann es generiert wird und wir so ein Lade
Indikator anzeigen können.</p>
<p>Die nächsten zwei Zeilen sind nicht verändert.</p>
<p>Als letztes setzt du <code>isGenerating</code> wieder auf
<code>false</code> da das Bild fertig generiert wurde und der Lade
Indikator nicht mehr angezeigt werden muss.</p>
<h4 id="html">HTML</h4>
<p>Hier fügst du nur drei Zeilen hinzu. Diese sollst du direkt unter dem
Form hinzufügen, dort wo der Knopf und der Input liegen.</p>
<p>Diese drei Zeilen, wie es der Name schon sagt, beinhalten ein
<code>if</code>-check welcher schaut ob isGenerating <code>true</code>
ist. Falls es <code>true</code> ist, dann wird der Paragraph Tag
angezeigt mit einem passenden Lade Text.</p>
</details>
<h3 id="dynamischer-alt-text">5. Dynamischer Alt Text</h3>
<p>Alt Text bei Bildern im Internet werden gebraucht falls das Bild
nicht laden kann oder für Blinde. Ersteres kann zmb. passieren falls die
Internet Verbindung zu langsam ist oder das Bild nicht mehr existiert
oder verschoben wurde.</p>
<p>Ein guter Start für ein Alt Text in unserem Fall wäre den Text vom
Input Feld zu nehmen und zu benutzen.</p>
<details>
<summary>
TIPP
</summary>
<p>In Svelte kann man dynamisch den Wert einer Variable als Attribut auf
Elemente setzen.</p>
<p>Hier wie du das machen kannst.</p>
<pre class="svelte"><code>&lt;script lang=&quot;ts&quot;&gt;
  let prompt = &quot;Eine siamesische Katze mit blauen Augen.&quot;;
&lt;/script&gt;


&lt;img alt=&quot;{prompt}&quot; /&gt;</code></pre>
<p>Sobald man <code>{</code> und <code>}</code> in einem Attribut
benutzt kann man variablen einsetzen.</p>
</details>
<h2 id="mittlere-aufgaben">Mittlere Aufgaben</h2>
<h3 id="bilder-galerie">6. Bilder Galerie</h3>
<p>Es wäre doch cool wenn wir Bilder die wir schon generiert haben auch
automatisch gespeichert werden.</p>
<details>
<summary>
TIPP
</summary>
<pre class="svelte"><code>&lt;script lang=&quot;ts&quot;&gt;
  import { addImage, images } from &quot;./gallery&quot;; // Neu

  // Restlicher code

  // let source = &quot;&quot;; &lt;-- Kann entfernt werden

  const handleGenerate = async () =&gt; {
    if (isGenerating) return;

    isGenerating = true;

    const url = await generate(prompt);
    addImage(url, prompt); // Neu

    isGenerating = false;
  };
&lt;/script&gt;


&lt;div class=&quot;app&quot;&gt;
  &lt;!-- Form &amp; Lade Indikator --&gt;

  &lt;!-- Neu bzw. ersetzt altes image --&gt;
  {#each $images as {url, prompt}}
    &lt;img
      class=&quot;image&quot;
      src=&quot;{url}&quot;
      alt=&quot;{prompt}&quot;
    /&gt;
  {/each}

  &lt;!-- Error --&gt;
&lt;/div&gt;</code></pre>
<p>Erneut sehr viel code aber hier die Erklärung.</p>
<p><code>addImage</code> und <code>images</code> sind von uns zu
verfügung gestellt und ihr könnt sie einfach benutzen.</p>
<p>Wir entfernen die variable <code>source</code> da sie nicht länger
gebraucht wird.</p>
<p>Im <code>handleGenerate</code> ändern wir zwei Zeilen. Einerseits
setzen wir das Resultat von unserer generate funktion auf die neu
erstellte Variable <code>url</code> und in der zweiten Zeile geben wir
<code>url</code> und <code>prompt</code> an <code>addImage</code> weiter
welches das ganze für uns abspeichert.</p>
<p>Anstelle wie vorher einfach die <code>source</code> variable einem
<code>&lt;img&gt;</code> Tag zu übergeben, iterieren wir nun über
<code>$images</code> was eine Liste von unseren Bildern ist. Iterieren
bedeutet so viel wie, wir gehen durch die ganze Liste und machen etwas
bestimmtes mit jedem Bild. In unserem Fall geben wir die Bild url an
einen <code>&lt;img&gt;</code> tag weiter.</p>
<p>Nun kannst du ausprobieren ob es auch funktioniert! Du kannst es gut
erkennen, da es mehrere Bilder untereinander sein sollten wenn du Knopf
zum generieren drückst.</p>
</details>
<h3 id="styling-der-galerie">7. Styling der Galerie</h3>
<p>Im Moment sind die einzelnen Bilder noch sehr gross und nicht sehr
schön angeordnet.</p>
<p>In CSS gibt es etwas das nennt sich <code>grid</code> und damit kann
man die Bilder in einem 2 breiten Gitter anordnen.</p>
<details>
<summary>
TIPP
</summary>
<pre class="svelte"><code>&lt;div class=&quot;app&quot;&gt;
  &lt;!-- Form &amp; Lade Indikator --&gt;

  &lt;!-- Neu --&gt;
  &lt;div class=&quot;image-grid&quot;&gt;
    {#each $images as {url, prompt}}
      &lt;img
        class=&quot;image&quot;
        src=&quot;{url}&quot;
        alt=&quot;{prompt}&quot;
      /&gt;
    {/each}
  &lt;/div&gt;

  &lt;!-- Error --&gt;
&lt;/div&gt;

&lt;style&gt;
  /* Andere Styles */

  .image {
    /* width: 768px; &lt;-- Entfernt */
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
&lt;/style&gt;</code></pre>
<p>Diesmal kein Javascript dafür ein wenig mehr CSS.</p>
<p>Im ersten Schritt fügen wir einen div um unsere Bilder hinzu mit der
Klasse <code>image-grid</code>.</p>
<p>Im <code>&lt;style&gt;</code> Tag editieren wir dann die
<code>image</code> Klasse und erstellen die <code>image-grid</code>
Klasse. In der ersteren entfernen wir die Breite unter dem Attribute
<code>width</code>. In der zweiten Klasse fügen wir die Breite wieder
hinzu und machen den div zu einem Gitter welches 2 Bilder nebeneinander
haben kann. Dazu fügen wir noch einen 8px breiten Spalt zwischen den
Bildern hinzu damit sie nicht aneinander kleben.</p>
</details>
<h2 id="schwere-aufgaben">Schwere Aufgaben</h2>
`;export default TASKS;