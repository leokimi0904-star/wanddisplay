// Hier stellst du dein Dashboard ein. Geheime Schlüssel gehören NICHT hierher,
// die werden später nur auf dem iPad gespeichert.
const CONFIG = {
  location: { lat: 52.4370, lon: 13.3860 },          // 12105 Berlin-Mariendorf
  night: { off: "22:30", on: "07:00" },
  // Voice Monkey v3: Adresse zum Auslösen eines "Routine Trigger".
  voiceMonkeyUrl: "https://api-v3.voicemonkey.io/trigger?token={token}&device={device}",

  // Alexa-Routinen-Auslöser für Szenen: die ID, die Voice Monkey unter dem Namen anzeigt.
  scenes: { guteNacht: "guten-morgen-z2f7h" },

  // true = die Geräte unten sind nur Platzhalter.
  exampleDevices: true,

  // Jedes Gerät braucht in Voice Monkey zwei Auslöser (an/aus). Deren IDs stehen bei on/off,
  // z. B. { id: "lampe", name: "Lampe", type: "light", on: "lampe-an-x4n8e", off: "lampe-aus-7m3q9" }
  rooms: [
    { name: "Wohnzimmer", devices: [
      { id: "stehlampe",   name: "Stehlampe",   type: "light" },
      { id: "lichterkette", name: "Lichterkette", type: "plug" },
    ]},
    { name: "Flur", devices: [
      { id: "flurlicht", name: "Deckenlicht", type: "light" },
      { id: "nachtlicht", name: "Nachtlicht",  type: "plug" },
    ]},
  ],
};
