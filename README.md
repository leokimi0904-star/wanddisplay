# Wanddisplay Zuhause

Smart-Home-Dashboard für ein iPad an der Wand: Uhr, Wetter (Berlin 12105), Kalender, Timer,
Licht & Steckdosen über Alexa und Spotify-Steuerung. Dunkles Design, Querformat,
nachts von 22:30 bis 7:00 schwarz.

**Live:** https://leokimi0904-star.github.io/wanddisplay/

## Einstellungen

Aussehen: `look` in `config.js` – `"hell"` (Standard), `"abend"` oder `"nacht"`.
Der Lebkuchenmann neben dem Datum verschwindet mit `christmas: false`.

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
| Licht & Steckdosen | fertig – Geräte nach dem Umzug in `config.js` eintragen |
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

Über **Playlists** (in der Spotify-Karte) siehst du deine Playlists und startest sie direkt auf dem iPad.
Die Spotify-App muss dafür auf dem iPad geöffnet sein (Hintergrund reicht).

## Licht & Steckdosen (Voice Monkey)

Kachel antippen → Voice Monkey → Alexa-Routine → Gerät schaltet.

1. **Voice Monkey** (https://voicemonkey.io): pro Gerät zwei *Routine Trigger* anlegen,
   Die **ID**, die Voice Monkey unter dem Namen anzeigt (z. B. `stehlampe-an-x4n8e`), kommt in `config.js` bei `on`/`off`.
   Szenen-Knöpfe (z. B. „Gute Nacht“) stehen in `config.js` unter `scenes`.
2. **Alexa-App:** pro Trigger eine Routine – *Wenn:* Smart Home → Trigger, *Aktion:* Gerät ein/aus.
3. **iPad:** Zahnrad → *Voice Monkey API-Token* eintragen (Voice Monkey → *API Tokens*).

Hinweis: Alexa meldet nicht zurück, ob ein Gerät an ist. Die Kacheln zeigen,
was zuletzt über das Dashboard geschaltet wurde.

## Am Computer einrichten, aufs iPad übertragen

1. Am Computer https://leokimi0904-star.github.io/wanddisplay/ öffnen → Zahnrad →
   Kalender-Adresse, Spotify Client ID und Voice-Monkey-Token eintragen → *Speichern*.
2. Alles testen (Kalender, „Gute Nacht“). Dann Zahnrad → *Auf ein anderes Gerät übertragen* →
   **Einrichtungscode kopieren** und an dich selbst schicken (Notiz, AirDrop, Mail an dich).

## Auf dem iPad installieren

1. Safari → https://leokimi0904-star.github.io/wanddisplay/ → Teilen → **Zum Home-Bildschirm**.
2. Die neue App **„Zuhause“** öffnen → Zahnrad → *Auf ein anderes Gerät übertragen* →
   Einrichtungscode einfügen → *Speichern* → einmal bei Spotify anmelden.
   (Die Home-Bildschirm-App hat einen eigenen Speicher, deshalb erst dort einfügen.)
3. Einstellungen → Anzeige & Helligkeit → **Automatische Sperre: Nie**.
4. Bluetooth-Box mit dem iPad koppeln, Spotify-App einmal starten.
5. Optional: Bedienungshilfen → **Geführter Zugriff**, damit das Dashboard im Vordergrund bleibt.
