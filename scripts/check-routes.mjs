import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

// Run against the production server after npm run build.
const base = process.argv[2] ?? "http://localhost:3012";
const manifest = JSON.parse(
  await readFile(".next/prerender-manifest.json", "utf8"),
);
const routes = Object.keys(manifest.routes).filter(
  (route) => !route.startsWith("/_"),
);
const internal = new Set();
for (const route of routes) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, `${route} should load directly`);
  const html = await response.text();
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) ?? []).length,
    1,
    `${route}: one primary heading`,
  );
  assert.ok(html.includes('id="main"'), `${route}: skip link target`);
  assert.ok(
    !html.includes("Use blue color theme") &&
      !html.includes("Use green color theme"),
    `${route}: no theme toggle`,
  );
  for (const match of html.matchAll(/href="(\/(?!\/)[^"]*)"/g)) {
    const path = new URL(match[1].replaceAll("&amp;", "&"), base).pathname;
    if (!path.startsWith("/_next/")) internal.add(path);
  }
}
for (const path of internal) {
  const response = await fetch(new URL(path, base), { method: "HEAD" });
  assert.ok(
    response.ok,
    `Broken internal destination ${path}: ${response.status}`,
  );
}
for (const route of [
  "/not-a-real-page",
  "/events/not-a-real-event",
  "/societies/not-a-community",
]) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 404, `${route} should return HTTP 404`);
}
console.log(
  `Passed: ${routes.length} public routes, ${internal.size} internal destinations, 3 unknown-route checks.`,
);
