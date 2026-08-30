# Fotogram 📸

Fotogram ist ein responsives Fotoalbum, bei dem Bilder in einer Galerie angezeigt und in einem Dialog vergrößert betrachtet werden können.

## 🚀 Features

- Responsive Foto-Galerie
- 12 verschiedene Bilder
- Bilder werden in einem CSS Grid angeordnet
- Klick auf ein Bild öffnet einen Dialog
- Anzeige des Bildtitels und der aktuellen Bildnummer
- Vor- und Zurück-Navigation
- Navigation mit der Tastatur
  - `←` vorheriges Bild
  - `→` nächstes Bild
  - `Esc` Dialog schließen

- Dialog kann durch Klick auf den Hintergrund geschlossen werden
- Hover-Effekt für die Bilder
- Responsive Anpassung für Desktop, Tablet und Mobile
- Logo im Header führt zurück zur Startseite

## 🛠️ Verwendete Technologien

- HTML5
- CSS3
- JavaScript
- CSS Grid
- HTML `<dialog>` Element

## 📁 Projektstruktur

```text
Fotogram/
│
├── index.html
├── style.css
├── script.js
│
└── Fotos/
    ├── Fotogram.svg
    ├── Footer_logo.svg
    ├── Footer_text_logo.svg
    ├── Url_icon.svg
    ├── closeIcon.svg
    ├── closeHoverIcon.svg
    ├── forwardsIcon.svg
    └── Bilder
```

## 🖥️ Aufbau

### HTML

Die HTML-Datei enthält:

- Header mit Fotogram-Logo
- Überschrift
- Bildgalerie
- Dialog für die Großansicht
- Footer

Die Bilder besitzen `tabindex="0"`, damit sie auch über die Tastatur fokussiert werden können.

Beispiel:

```html
<img
  onclick="render(0)"
  tabindex="0"
  src="Fotos/alaska-810433_1280.jpg"
  alt="alaska-810433_1280"
/>
```

## 🎨 CSS

Das Styling befindet sich in `style.css`.

CSS Custom Properties werden für die wichtigsten Farben verwendet:

```css
:root {
  --primary-color: #09212a;
  --secondary-color: #06171e;
  --border-color: #124658;
  --text-color: #ffffff;
  --hover-color: #6bc1e1;
}
```

Die Galerie verwendet CSS Grid:

```css
.images {
  display: grid;
  grid-template-columns: repeat(7, 150px);
  gap: 24px;
}
```

Durch verschiedene Media Queries passt sich die Galerie an unterschiedliche Bildschirmgrößen an.

## ⚙️ JavaScript

Die JavaScript-Logik befindet sich in `script.js`.

Die Bildpfade und Bildnamen werden in Arrays gespeichert:

```javascript
const imageSrc = [
  "Fotos/alaska-810433_1280.jpg",
  "Fotos/anime-8788959_1280.jpg",
  // ...
];
```

Der aktuelle Index des geöffneten Bildes wird mit folgender Variable gespeichert:

```javascript
let currentIndex = 0;
```

### `render()`

Die zentrale Funktion `render()` übernimmt das Öffnen des Dialogs und die Navigation zwischen den Bildern.

```javascript
render(0);
```

öffnet beispielsweise das erste Bild.

Für die Navigation werden folgende Werte verwendet:

```javascript
render("previous");
render("next");
render("myDialog");
```

### `setTag()`

Die Funktion `setTag()` erzeugt den Inhalt des Dialogs dynamisch.

Dabei werden Bild, Titel, Navigation und Bildnummer anhand des aktuellen Index eingesetzt.

```javascript
function setTag(i, src, alt) {
  return `...`;
}
```

Dadurch muss der Dialog-Inhalt nicht für jedes Bild einzeln im HTML geschrieben werden.

## ⌨️ Tastatursteuerung

Während der Dialog geöffnet ist, können die Bilder mit der Tastatur gewechselt werden.

| Taste | Funktion         |
| ----- | ---------------- |
| `←`   | Vorheriges Bild  |
| `→`   | Nächstes Bild    |
| `Esc` | Dialog schließen |

Die Tastatursteuerung wird über `keydown` umgesetzt:

```javascript
document.addEventListener("keydown", function (event) {
  if (!dialog.open) {
    return;
  }

  if (event.key === "ArrowRight") {
    render("next");
  }

  if (event.key === "ArrowLeft") {
    render("previous");
  }

  if (event.key === "Escape") {
    dialog.close();
  }
});
```

## 🔄 Bildnavigation

Wenn das erste Bild erreicht ist und man auf „Zurück“ klickt, wird automatisch zum letzten Bild gewechselt.

Genauso führt „Weiter“ beim letzten Bild wieder zum ersten Bild.

Dadurch entsteht eine Endlos-Navigation:

```text
12 → 1 → 2 → 3 → ...
```

und:

```text
1 ← 12 ← 11 ← 10 ← ...
```

## 📱 Responsive Design

Die Galerie passt sich verschiedenen Bildschirmgrößen an:

- **Desktop:** mehrere Bilder pro Reihe
- **Tablet:** weniger Bilder pro Reihe
- **Mobile:** 2 Bilder pro Reihe
- **Sehr kleine Displays:** 1 Bild pro Reihe

Zusätzlich werden Header, Footer, Überschrift und Dialog für kleinere Bildschirmgrößen angepasst.

## ▶️ Projekt starten

1. Projektordner öffnen.
2. `index.html` im Browser öffnen.

Alternativ kann das Projekt mit einer lokalen Entwicklungsumgebung wie **Live Server** gestartet werden.

## 🎯 Ziel des Projekts

Das Ziel des Projekts ist es, eine moderne und responsive Fotogalerie mit HTML, CSS und JavaScript umzusetzen.

Dabei werden insbesondere folgende Konzepte verwendet:

- HTML-Struktur
- CSS Grid
- Responsive Design
- CSS Media Queries
- JavaScript Arrays
- Funktionen
- DOM-Manipulation
- Event Listener
- `<dialog>` Element
- Tastatursteuerung
- Dynamisches Erstellen von HTML
