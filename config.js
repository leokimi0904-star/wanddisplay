// Hier stellst du dein Dashboard ein. Geheime Schlüssel gehören NICHT hierher,
// die werden später nur auf dem iPad gespeichert.
const CONFIG = {
  location: { lat: 52.4370, lon: 13.3860 },          // 12105 Berlin-Mariendorf
  night: { off: "22:30", on: "07:00" },
  // Voice Monkey: Adresse zum Auslösen eines "Routine Trigger".
  voiceMonkeyUrl: "https://api-v2.voicemonkey.io/trigger?token={token}&device={device}",

  // Alexa-Routinen-Auslöser für Szenen (Name wie in Voice Monkey).
  scenes: { guteNacht: "gute-nacht" },

  // true = die Geräte unten sind nur Platzhalter.
  exampleDevices: true,

  // Jedes Gerät braucht in Voice Monkey zwei Auslöser: "<id>-an" und "<id>-aus".
  // Andere Namen gehen mit on/off, z. B. { id: "lampe", name: "Lampe", type: "light", on: "lampe-ein", off: "lampe-ausschalten" }
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
