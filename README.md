# Wanddisplay Zuhause

Smart-Home-Dashboard für ein iPad an der Wand: Uhr, Wetter (Berlin 12105), Kalender, Timer,
Licht & Steckdosen über Alexa und Spotify-Steuerung. Dunkles Design, Querformat,
nachts von 22:30 bis 7:00 schwarz.

**Live:** https://leokimi0904-star.github.io/wanddisplay/

## Einstellungen

Alles Anpassbare steht in [`config.js`](config.js): Ort, Nachtzeiten, Räume und Geräte.
Ein Gerät sieht so aus:

```js
{ id: "stehlampe", name: "Stehlampe", type: "light" }   // type: "light" oder "plug"
```

Zugangsschlüssel (Voice Monkey, Spotify) kommen **nie** in dieses Repo – sie werden nur auf dem iPad gespeichert.

## Stand

| Bereich | Status |
|---|---|
| Uhr, Datum, Nachtmodus | fertig |
| Wetter (Open-Meteo) | live |
| Timer mit Ton | fertig |
| Licht & Steckdosen | Oberfläche fertig, Alexa-Anbindung (Voice Monkey) folgt |
| Kalender | Beispieltermine, iCloud-Anbindung folgt |
| Spotify | Beispiel, Anbindung folgt |

## Auf dem iPad einrichten

1. In Safari die Live-Adresse öffnen → Teilen → **Zum Home-Bildschirm**.
2. Einstellungen → Anzeige & Helligkeit → **Automatische Sperre: Nie**.
3. Optional: Einstellungen → Bedienungshilfen → **Geführter Zugriff**, damit das Dashboard immer im Vordergrund bleibt.
