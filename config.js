// Hier stellst du dein Dashboard ein. Geheime Schlüssel gehören NICHT hierher,
// die werden später nur auf dem iPad gespeichert.
const CONFIG = {
  location: { lat: 52.4370, lon: 13.3860 },          // 12105 Berlin-Mariendorf
  night: { off: "22:30", on: "07:00" },
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
