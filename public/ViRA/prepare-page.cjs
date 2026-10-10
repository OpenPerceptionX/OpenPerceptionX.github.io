/* Optional maintenance helper; the served page has no build dependency. */
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const root = __dirname;
const containers = ["navtest", "navhard", "hugsim"].map(key => ({ dataset: { table: key }, innerHTML: "" }));
const document = {
  querySelectorAll(selector) { return selector === "[data-table]" ? containers : []; },
  querySelector() { return null; },
  addEventListener() {}
};
const window = { matchMedia() { return { matches: false, addEventListener() {} }; } };
const context = vm.createContext({ document, window });
vm.runInContext(fs.readFileSync(path.join(root, "benchmark-data.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(root, "script.js"), "utf8"), context);
const data = window.VIRA_BENCHMARKS;
for (const [key, rowCount, valueCount] of [["navtest", 7, 10], ["navhard", 14, 9], ["hugsim", 6, 10]]) {
  assert.equal(data[key].rows.length, rowCount, key + " row count");
  for (const row of data[key].rows) assert.equal(row.values.length, valueCount, key + " column count");
}
assert.equal(data.navhard.rows.filter(row => row.combinedScore !== null).length, 7);
for (const item of containers) {
  assert.ok(/<table\b/.test(item.innerHTML), item.dataset.table + " did not render");
  assert.equal((item.innerHTML.match(/class="gain"/g) || []).length, 3, item.dataset.table + " gain badges");
}
let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const item of containers) {
  const pattern = new RegExp('(<div\\b[^>]*data-table="' + item.dataset.table + '"[^>]*>)[\\s\\S]*?</div>');
  assert.ok(pattern.test(html), "Missing table container: " + item.dataset.table);
  html = html.replace(pattern, (_, opening) => opening + item.innerHTML + "</div>");
}
fs.writeFileSync(path.join(root, "index.html"), html, "utf8");
fs.writeFileSync(path.join(root, "results.json"), JSON.stringify(data, null, 2) + "\n", "utf8");
console.log("Prepared all 3 static tables; validated 27 data rows and 9 gain badges.");
