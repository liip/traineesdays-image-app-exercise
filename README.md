# Schnuppertag Bilder

- [Schnuppertag Bilder](#schnuppertag-bilder)
  - [Starten](#starten)
  - [Bearbeitung](#bearbeitung)
    - [Development](#development)
    - [Commits](#commits)
  - [Aufgaben](#aufgaben)
    - [Abändern](#abändern)
    - [Im Browser Anschauen](#im-browser-anschauen)
    - [Frontend](#frontend)
  - [Schnupperlehrlinge](#schnupperlehrlinge)
    - [Starten des Projekts](#starten-des-projekts)

Dieses Repository wird für Schnuppertage gebraucht.

## Starten

Es gibt ein paar Schritte welche man durch führen muss.

Ein Lehrnender sollte jeweils den Laptop aufgeklappt und an den Beamer gehänkt vorne aufstellen und folgenden command ausführen

```bash
npm run provide-key
```

Damit startet ein express server im Hintergrund welcher den openai-api-key zur verfügung stellt. Davor muss jedoch das `.env-example` kopiert werden und der [api key](https://platform.openai.com/api-keys) muss mit der [organization](https://platform.openai.com/account/organization) eingeschrieben werden.

## Bearbeitung

Nach dem klonen sieht man nichts ausser diese markdown Datei, die `TASKS.md` Datei, das `index.html` und den `src` Ordner.

Mit dem Command

```bash
npm run liip-dev:toggle
```

Kann man alle files sichtbar machen. Es benennt das `settings.json` im `.vscode` Ordner um, damit es keinen bzw. einen Effekt hat. Es blendet, wenn aktiv, alle files ausser die oben genannten aus.

### Development

Wenn man etwas bei den Aufgaben abändern will kann man folgenden command im root des projekts ausführen.

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

### Im Browser Anschauen

Die Aufgaben können im Browser angeschaut werden in dem man folgenden Command ausführt.

```bash
npm run tasks
```

### Frontend

Das Frontend für die Aufgaben liegt im `tasks` folder und basiert auf svelte. Es benutzt highlight.js um codeblöcke zu highlighten.

## Schnupperlehrlinge

Das Projekt sollte per [vscode.dev](https://vscode.dev) ausgeführt werden in einem github codespace. Diese sind bis zu 60 Stunden auf 2 Kernen gratis und brauchen lediglich einen Github Account. Diese Accounts sollten im Voraus erstellt werden um sicher zu gehen, dass alle einen Account haben und keine Zeit verschwendet wird mit Account-Erstellung.

Auf [vscode.dev](https://vscode.dev) ist die [Github Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) Extension schon vorinstalliert. Sie müssen sich lediglich mit dem Github Account anmelden und das Repository auswählen.

### Starten des Projekts

Das Projekt und die Aufgaben werden mit folgendem command ausgeführt.

```bash
npm run dev %IP%
```

`%IP%` muss mit der IP ersetzt werden welche angezeigt wird nachdem man den key provider [gestartet](#starten) hat.

Hierbei ist zu beachten, dass es zwei neue tabs im browser direkt öffnet.
