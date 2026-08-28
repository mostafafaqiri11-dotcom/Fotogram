# 📸 Fotogram

**Fotogram** ist eine responsive Fotogalerie, die mit **HTML, CSS und JavaScript** umgesetzt wurde.
Die Webseite stellt verschiedene Bilder in einem übersichtlichen Grid dar und ermöglicht es, einzelne Bilder in einer größeren Dialogansicht zu betrachten.

---

## ✨ Funktionen

- 🖼️ Responsive Bildergalerie
- 🔍 Vergrößerte Darstellung der Bilder
- ⬅️ Navigation zum vorherigen Bild
- ➡️ Navigation zum nächsten Bild
- ❌ Dialog schließen
- 🖱️ Hover-Effekte bei Bildern und Buttons
- ⌨️ Tastaturbedienung durch `tabindex`
- 📱 Responsive Layout für Desktop, Tablet und Smartphone
- 🎨 Einheitliches Farbschema über CSS-Variablen
- 🧩 Verwendung des HTML5-`<dialog>`-Elements

---

## 🛠️ Technologien

Das Projekt verwendet:

- **HTML5**
- **CSS3**
- **JavaScript**
- **CSS Grid**
- **Flexbox**
- **Responsive Design / Media Queries**
- **SVG**
- **HTML Dialog Element**

---

## 📁 Projektstruktur

```text
Fotogram/
│
├── index.html
├── style.css
├── script.js
│
├── Fotos/
│   ├── Fotogram.svg
│   ├── Footer_logo.svg
│   ├── Footer_text_logo.svg
│   ├── Url_icon.svg
│   ├── closeIcon.svg
│   ├── closeHoverIcon.svg
│   ├── forwardsIcon.svg
│   │
│   ├── alaska-810433_1280.jpg
│   ├── anime-8788959_1280.jpg
│   ├── atmosphere-8752835_1280.png
│   ├── blue-tit-8521052_1280.jpg
│   ├── hurricane-92968_1280.jpg
│   ├── lake-2896379_1280.jpg
│   ├── moorente-8783210_1280.jpg
│   ├── sea-2563389_1280.jpg
│   ├── snow-bunting-6781122_1280.jpg
│   ├── snow-leopard-cubs-8039138_1280.jpg
│   ├── travel-8785493_1280.jpg
│   └── winter-1675197_1280.jpg
│
└── README.md
```

---

## 🎨 Design

Das Design basiert auf einem dunklen Farbschema.

Die wichtigsten Farben werden zentral über CSS Custom Properties definiert:

```css
:root {
  --primary-color: #09212a;
  --secondary-color: #06171e;
  --border-color: #124658;
  --text-color: #ffffff;
  --hover-color: #6bc1e1;
}
```

Dadurch können Farben im gesamten Projekt einfach geändert werden, ohne jede einzelne CSS-Regel anpassen zu müssen.

---

## 🖼️ Bildergalerie

Die Bilder werden mit **CSS Grid** angeordnet.

Auf großen Bildschirmen werden zunächst sieben Bilder pro Reihe dargestellt:

```css
.images {
  display: grid;
  grid-template-columns: repeat(7, 150px);
  gap: 16px;
  row-gap: 40px;
}
```

Alle Bilder haben eine feste Größe von **150 × 150 Pixeln**.

```css
.images img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 16px;
}
```

`object-fit: cover` sorgt dafür, dass die Bilder den verfügbaren Bereich vollständig ausfüllen, ohne verzerrt zu werden.

---

## 🖱️ Hover-Effekt

Wenn sich der Mauszeiger über einem Bild befindet, verändert sich die Rahmenfarbe:

```css
.images img:hover {
  border-color: var(--hover-color);
  border-width: 3px;
}
```

Dadurch erkennt der Benutzer sofort, dass das Bild interaktiv ist.

---

## 📱 Responsive Design

Die Galerie passt sich automatisch an unterschiedliche Bildschirmgrößen an.

### Desktop

Bei großen Bildschirmbreiten werden mehrere Bilder nebeneinander angezeigt.

### Tablet

Bei kleineren Bildschirmbreiten wird die Anzahl der Spalten reduziert:

```css
@media (max-width: 1200px) {
  .images {
    grid-template-columns: repeat(5, 1fr);
  }
}
```

Weitere Breakpoints reduzieren die Galerie schrittweise:

```text
> 1440px → 7 Spalten
≤ 1440px → 6 Spalten
≤ 1200px → 5 Spalten
≤ 1000px → 4 Spalten
≤ 900px  → 3 Spalten
≤ 710px  → 2 Spalten
≤ 470px  → 1 Spalte
```

Dadurch kann die Webseite auch auf Smartphones verwendet werden.

---

## 📱 Mobile Anpassungen

Auf kleinen Bildschirmen werden zusätzlich verschiedene Elemente angepasst.

Zum Beispiel wird die Überschrift kleiner:

```css
@media (max-width: 775px) {
  h1 {
    font-size: 48px;
  }
}
```

Auch der Header und Footer werden für mobile Geräte angepasst.

Bei sehr kleinen Geräten wird die Überschrift nochmals verkleinert:

```css
@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
}
```

---

## 🔍 Dialog

Für die vergrößerte Darstellung eines Bildes wird das HTML5-Element `<dialog>` verwendet:

```html
<dialog class="dialog" id="myDialog"></dialog>
```

Der Dialog zeigt:

- den Namen bzw. Titel des Bildes
- das ausgewählte Bild
- einen Button zum Schließen
- einen Button für das vorherige Bild
- einen Button für das nächste Bild
- die aktuelle Position innerhalb der Galerie

### Desktop

Der Dialog besitzt eine Breite von:

```css
width: 688px;
```

Das Bild innerhalb des Dialogs wird mit einer Größe von:

```css
width: 560px;
height: 374px;
```

dargestellt.

### Mobile

Auf Smartphones wird der Dialog angepasst:

```css
@media (max-width: 775px) {
  .dialog {
    width: 343px;
    height: 664px;
  }
}
```

Auch das Bild wird für die mobile Ansicht angepasst.

---

## ⌨️ Tastaturbedienung

Die Bilder besitzen `tabindex="0"`:

```html
<img tabindex="0" id="image1" ... />
```

Dadurch können die Bilder mit der Tastatur fokussiert werden.

Die Benutzer können dadurch mit der `Tab`-Taste durch die interaktiven Elemente navigieren.

Die Navigation des Dialogs erfolgt über die entsprechenden Buttons.

---

## 🧭 Navigation

Der Dialog enthält zwei Navigationsbuttons:

```html
<button class="dialog_footer_revers_arrow"></button>

<button class="dialog_footer_forward_arrow"></button>
```

Der linke Button führt zum vorherigen Bild.

Der rechte Button führt zum nächsten Bild.

Das JavaScript übernimmt dabei die Aktualisierung des aktuell angezeigten Bildes.

---

## 🦶 Footer

Der Footer besitzt eine abgerundete obere Form:

```css
.site_footer {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
```

Dadurch entsteht die charakteristische gebogene Form des Footers.

Das Footer-Logo und der dazugehörige Text werden untereinander angeordnet:

```css
.site_footer_content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

---

## 🧱 Layout-Techniken

Im Projekt werden verschiedene CSS-Techniken eingesetzt.

### CSS Grid

Für die Bildergalerie:

```css
display: grid;
```

### Flexbox

Für Header, Footer und Dialog:

```css
display: flex;
```

### CSS Custom Properties

Für zentrale Designwerte:

```css
var(--primary-color);
var(--secondary-color);
var(--text-color);
```

### Media Queries

Für responsive Anpassungen:

```css
@media (max-width: 710px) {
    ...
}
```

### `object-fit`

Für die Darstellung der Bilder:

```css
object-fit: cover;
```

### `transition`

Für sanfte Übergänge:

```css
transition: transform 0.3s ease;
```

---

## 🚀 Projekt starten

Das Projekt benötigt keinen speziellen Server.

### Variante 1 – Direkt öffnen

Die Datei

```text
index.html
```

kann direkt mit einem Browser geöffnet werden.

### Variante 2 – VS Code

Das Projekt kann in **Visual Studio Code** geöffnet und beispielsweise mit **Live Server** gestartet werden.

---

## 🎯 Ziel des Projekts

Das Ziel von Fotogram ist die Entwicklung einer modernen und responsiven Fotogalerie.

Dabei werden insbesondere folgende Webentwicklung-Kenntnisse angewendet:

- Semantisches HTML
- CSS Grid
- Flexbox
- Responsive Webdesign
- Media Queries
- CSS Custom Properties
- Hover- und Focus-Zustände
- HTML5 `<dialog>`
- JavaScript DOM-Manipulation
- Event Handling
- Tastaturbedienung
- Accessibility-Grundlagen

---

## 📌 Zusammenfassung

**Fotogram** verbindet eine responsive Bildergalerie mit einer interaktiven Dialogansicht. Durch CSS Grid, Media Queries und flexible Layouts funktioniert die Webseite auf unterschiedlichen Bildschirmgrößen. JavaScript sorgt für die Interaktion und die Navigation zwischen den Bildern.
