// Cloudflare Worker: holt den öffentlichen iCloud-Kalender und gibt ihn ans Dashboard weiter.
// Der iCloud-Link wird NICHT hier eingetragen, sondern im Cloudflare-Dashboard als
// Secret "CALENDAR_URL" (Settings → Variables and Secrets).
export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (!env.CALENDAR_URL) {
      return new Response("Secret CALENDAR_URL fehlt", { status: 500, headers: cors });
    }
    const url = env.CALENDAR_URL.trim().replace(/^webcal:/i, "https:");
    const res = await fetch(url, { cf: { cacheTtl: 60, cacheEverything: true } });
    if (!res.ok) {
      return new Response(`iCloud antwortet mit Fehler ${res.status}`, { status: 502, headers: cors });
    }
    return new Response(await res.text(), {
      headers: { ...cors, "Content-Type": "text/calendar; charset=utf-8", "Cache-Control": "max-age=60" },
    });
  },
};
