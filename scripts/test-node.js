import { main as test } from "../dist/Main.js";
import chalk from "chalk";

/**
 * @returns {import("../ditto-src/Effect").Effect<any>}
 */
function log_success({ description }) {
  return () => {
    console.info(chalk.green.bold("success"), description);
  };
}

/**
 * @returns {import("../ditto-src/Effect").Effect<any>}
 */
function log_error({ description, error }) {
  return () => {
    console.error(chalk.red.bold("error  "), description);
    console.error(" ", chalk.red(error));
  };
}

export async function main() {
  const success = test({ log_success, log_error })();
  if (!success) {
    process.exit(1);
  }
  console.log(chalk.cyan.bold("crushed it"));
}
