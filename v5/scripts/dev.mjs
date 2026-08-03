import { spawn } from "node:child_process";
import { createRequire } from "node:module";

import { generateArticlesRegistry } from "./generate-articles.mjs";

await generateArticlesRegistry();

let generationInProgress = false;
let generationRequested = false;

async function regenerate() {
    if (generationInProgress) {
        generationRequested = true;
        return;
    }

    generationInProgress = true;
    try {
        await generateArticlesRegistry();
    } catch (error) {
        console.error(error);
    } finally {
        generationInProgress = false;
        if (generationRequested) {
            generationRequested = false;
            await regenerate();
        }
    }
}

// Polling avoids platform-specific recursive watcher limits. The generator only
// writes when the set of article routes changes, so this does not cause rebuilds.
const generationInterval = setInterval(regenerate, 500);

const require = createRequire(import.meta.url);
const nextBinary = require.resolve("next/dist/bin/next");
const next = spawn(
    process.execPath,
    [nextBinary, "dev", "--webpack", ...process.argv.slice(2)],
    { stdio: "inherit" },
);

function stop(signal) {
    clearInterval(generationInterval);
    next.kill(signal);
}

process.once("SIGINT", () => stop("SIGINT"));
process.once("SIGTERM", () => stop("SIGTERM"));

next.once("exit", (code, signal) => {
    clearInterval(generationInterval);
    process.exitCode = signal ? 1 : (code ?? 1);
});
