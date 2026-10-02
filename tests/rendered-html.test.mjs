import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../.next/server/app/", import.meta.url);
const html = await readFile(new URL("index.html", output), "utf8");
const playUrl = "https://play.google.com/store/apps/details?id=com.longestdachshund.game";

test("home page renders the Android launch and real store links", () => {
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.ok(html.split(`href="${playUrl}"`).length - 1 >= 5);
  assert.match(html, /Available now for Android/);
  assert.doesNotMatch(html, /Coming soon|Development preview/);
  assert.match(html, /An iOS version is not available yet/);
});

test("useful dachshund game content and FAQ are server rendered", () => {
  assert.match(html, /fun mobile games for dachshund lovers/i);
  assert.match(html, /A virtual doxie to come home to/);
  assert.equal((html.match(/<details\b/g) ?? []).length, 6);
  assert.match(html, /Can I make a dog that looks like my dachshund/);
  assert.match(html, /Does the game have in-app purchases/);
});

test("metadata uses the production domain and descriptive title", () => {
  assert.match(html, /<title>The Longest Dachshund \| Fun Dachshund Game for Android<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/www.longestdachshund.com\/?"/);
  assert.match(html, /<meta name="description" content="A fun Android game for dachshund lovers/);
  assert.match(html, /https:\/\/www.longestdachshund.com\/og.png/);
  assert.doesNotMatch(html, /chatgpt.site|codex-preview/);
});

test("game structured data matches the actual app without invented ratings", () => {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match);
  const data = JSON.parse(match[1]);
  assert.equal(data["@type"], "VideoGame");
  assert.equal(data.operatingSystem, "Android");
  assert.equal(data.installUrl, playUrl);
  assert.equal(data.aggregateRating, undefined);
});

test("Google ownership verification is present in the document head", () => {
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  assert.ok(head);
  assert.match(head, /<meta name="google-site-verification" content="33z4FDDKhlJZlcEkUrnajwwu1o5fYSB-oUARPil7d8c"/);
});

test("legal pages remain available with their own canonicals", async () => {
  for (const path of ["privacy-policy", "delete-account"]) {
    const page = await readFile(new URL(`${path}.html`, output), "utf8");
    assert.ok(page.includes(`rel="canonical" href="https://www.longestdachshund.com/${path}"`));
    assert.ok(page.includes(`href="/${path}"`));
  }
});

test("robots and sitemap expose only canonical public routes", async () => {
  const robots = await readFile(new URL("robots.txt.body", output), "utf8");
  const sitemap = await readFile(new URL("sitemap.xml.body", output), "utf8");
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/www.longestdachshund.com\/sitemap.xml/);
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, 3);
  assert.match(sitemap, /<loc>https:\/\/www.longestdachshund.com<\/loc>/);
  assert.doesNotMatch(sitemap, /localhost|chatgpt.site|vercel.app/);
});
