import path from "node:path";
import { chromium, webkit, firefox } from "playwright";
import fs from "node:fs/promises";
import esbuild from "esbuild";
import chalk from "chalk";

async function bundleTests() {
  const outfile = path.join("node_modules", ".cache", "browser-test-bundle.js");

  await esbuild.build({
    stdin: {
      // https://github.com/evanw/esbuild/blob/1bd00940bf7994b567d1dee2ff92c1249a61bafe/lib/shared/types.ts#L141-L146
      contents: `
      import { main } from "./dist/Main.js";
      const success = main({
        log_success: (name) => () => {
          console.log("success", name);
        },
        log_error: (name, reason) => () => {
          console.error("error  ", name, reason);
        },
      })()
      if (!success) {
        throw new Error("test failure")
      }
      `,
      resolveDir: ".",
    },
    bundle: true,
    outfile,
  });

  const bundle = await fs.readFile(outfile, { encoding: "utf-8" });
  return bundle;
}

const SUPPORTED_BROWSERS = ["chromium", "webkit", "firefox"];

/**
 * @param {string} browserName
 */
export async function main(browserName) {
  if (!SUPPORTED_BROWSERS.includes(browserName)) {
    throw new Error(`Unsupported BROWSER: ${browserName}`);
  }

  console.log(chalk.yellow.bold("bundling tests..."));
  const bundle = await bundleTests();

  console.log(chalk.yellow.bold(`launching ${browserName}...`));
  const browser = await { chromium, webkit, firefox }[browserName].launch();
  const page = await browser.newPage();
  page.on("console", (message) => {
    console[message.type()]("  " + message.text());
  });

  console.log(chalk.yellow.bold(`running tests...`));
  await page.evaluate((s) => eval(s), bundle);

  await browser.close();
}
