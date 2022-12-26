import { main as node } from "./test-node.js";
import { main as browser } from "./test-browser.js";

const { BROWSER } = process.env;

if (BROWSER) {
  browser(BROWSER);
} else {
  node();
}
