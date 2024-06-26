# Schnuppertag Bilder

- [Schnuppertag Bilder](#schnuppertag-bilder)
  - [Bearbeitung](#bearbeitung)
    - [Development](#development)
    - [Commits](#commits)
  - [Aufgaben](#aufgaben)
    - [Abändern](#abändern)
    - [Im Browser Anschauen](#im-browser-anschauen)
    - [Frontend](#frontend)
  - [Chat](#chat)
  - [Schnupperlehrlinge](#schnupperlehrlinge)
    - [Vor dem starten](#vor-dem-starten)
    - [Starten des Projekts](#starten-des-projekts)
  - [Durchführung](#durchführung)

Dieses Repository wird für Schnuppertage gebraucht.

## Bearbeitung

Nach dem klonen sieht man nichts ausser diese markdown Datei, die `TASKS.md` Datei, das `index.html` und den `src` Ordner.

Mit dem Command

```bash
npm run liip-dev:toggle
```

Kann man alle files sichtbar machen. Es benennt das `settings.json` im `.vscode` Ordner um, damit es keinen bzw. einen Effekt hat. Es blendet, wenn aktiv, alle files ausser die oben genannten aus.

### Development

Wenn man etwas bei den Aufgaben abändern will kann man folgenden command im root des Projekts ausführen.

```bash
npm run liip-dev
```

### Commits

Man sollte immer sicherstellen, dass man das `settings.json` nicht inaktiv lässt und so committed.

## Aufgaben

Die Aufgaben für die Schnupperlehrlinge sind im `TASKS.md`.

### Abändern

Falls die Aufgaben verändert werden kann man mit

```bash
npm run tasks:build
```

die Aufgaben neu zu HTML konvertieren.

Hierzu brauchst du jedoch `pandoc` welches du [hier](https://pandoc.org/installing.html) installieren kannst.

### Im Browser Anschauen

Die Aufgaben können im Browser angeschaut werden in dem man folgenden Command ausführt.

```bash
npm run tasks
```

### Frontend

Das Frontend für die Aufgaben liegt im `tasks` folder und basiert auf svelte. Es benutzt highlight.js um codeblöcke zu highlighten.

## Chat

Der Chat benutzt OpenAIs gpt-4-turbo und bekommt die Aufgaben, einschlisslich dessen Lösungen, und das Ausgangsfile eingespeist.

Dieser Chat wird den Schnupperlehrlingen automatisch zur Verfügung gestellt und sie können ihn benutzten.

## Schnupperlehrlinge

Das Projekt sollte per [vscode.dev](https://vscode.dev) ausgeführt werden in einem github codespace. Diese sind bis zu 60 Stunden auf 2 Kernen gratis und brauchen lediglich einen Github Account. Diese Accounts sollten im Voraus erstellt werden um sicher zu gehen, dass alle einen Account haben und keine Zeit verschwendet wird mit Account-Erstellung.

Auf [vscode.dev](https://vscode.dev) ist die [Github Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) Extension schon vorinstalliert. Sie müssen sich lediglich mit dem Github Account anmelden und das Repository auswählen.

### Vor dem starten

Es muss bei jedem Lernenden ein env.js existieren, dies sollte vor dem Schnuppertag als vorbereitung passieren.

```js
export const OPENAI_API_KEY = "key";
export const OPENAI_ORGANIZATION = "org";
```

Den API key für openai findet man [hier](https://platform.openai.com/api-keys) und die organization [hier](https://platform.openai.com/account/organization).

### Starten des Projekts

Das Projekt und die Aufgaben werden mit folgendem command ausgeführt.

```bash
npm start
```

Hierbei ist zu beachten, dass es drei neue tabs im browser direkt öffnet.

## Durchführung

Bei der Durchführung ist zu beachten, dass zuerst eine Einführung in HTML, CSS & JavaScript gemacht werden muss bevor die Einführung in Svelte und OpenAI/ChatGPT gemacht werden kann.
