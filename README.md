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
| Kalender (iCloud) | fertig – Einrichtung siehe unten |
| Spotify | fertig – Einrichtung siehe unten |

## Kalender einrichten

Das Dashboard liest einen **öffentlich freigegebenen iCloud-Kalender**. Weil Browser den
iCloud-Link nicht direkt laden dürfen, holt ein kostenloser **Cloudflare Worker** ihn ab.

1. **iPhone:** Kalender-App → *Kalender* → ⓘ neben deinem Kalender → *Öffentlicher Kalender* an →
   *Link teilen …* → *Kopieren*.
2. **Cloudflare** (https://dash.cloudflare.com): *Workers & Pages* → *Create* → *Start with Hello World* →
   Name `kalender` → *Deploy* → *Edit code* → Inhalt durch [`worker/kalender-proxy.js`](worker/kalender-proxy.js)
   ersetzen → *Deploy*.
3. Im Worker: *Settings* → *Variables and Secrets* → *Add* → Typ **Secret**, Name **`CALENDAR_URL`**,
   Wert = der iCloud-Link aus Schritt 1 → *Deploy*.
4. Die Worker-Adresse (`https://kalender.<name>.workers.dev`) einmal im Browser öffnen –
   es sollte Text erscheinen, der mit `BEGIN:VCALENDAR` beginnt.
5. **iPad:** Dashboard öffnen → Zahnrad → Adresse eintragen → *Speichern*.

Neue Termine erscheinen nach wenigen Minuten (iCloud aktualisiert den öffentlichen Link
mit etwas Verzögerung, das Dashboard fragt alle 5 Minuten nach).

## Spotify einrichten

Voraussetzung: Spotify Premium (sonst erlaubt Spotify keine Fernsteuerung).

1. https://developer.spotify.com/dashboard → *Create app*:
   Redirect URI **`https://leokimi0904-star.github.io/wanddisplay/`**, Haken bei **Web API** → *Save*.
2. In der App unter *Settings* die **Client ID** kopieren.
3. **iPad:** Dashboard (Home-Bildschirm-App) → Zahnrad → Client ID eintragen → *Speichern* →
   bei Spotify anmelden → *Zustimmen*. Danach landest du wieder im Dashboard.
4. Musik in der **Spotify-App auf dem iPad** starten (Bluetooth-Box mit dem iPad verbunden).
   Ab dann steuerst du Play/Pause, Titel und Lautstärke über das Dashboard.

Läuft gerade nichts, versucht der Play-Button die Wiedergabe auf dem iPad fortzusetzen.

## Auf dem iPad einrichten

1. In Safari die Live-Adresse öffnen → Teilen → **Zum Home-Bildschirm**.
2. Einstellungen → Anzeige & Helligkeit → **Automatische Sperre: Nie**.
3. Einstellungen (Zahnrad) **in der Home-Bildschirm-App** eintragen – sie hat einen eigenen Speicher, getrennt von Safari.
4. Optional: Einstellungen → Bedienungshilfen → **Geführter Zugriff**, damit das Dashboard immer im Vordergrund bleibt.
