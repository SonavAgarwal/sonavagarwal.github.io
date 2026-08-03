import { readdir, rename, rm, stat } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const TARGET_BYTES = 500_000;
const TOLERANCE_BYTES = 100_000;
const MAX_QUALITY = 70;
const IMAGE_EXTENSIONS = new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".tif",
    ".tiff",
    ".webp",
]);

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const articlesDirectory = path.resolve(scriptDirectory, "../src/articles");

function run(command, args) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, { stdio: "inherit" });
        child.once("error", reject);
        child.once("exit", (code, signal) => {
            if (code === 0) {
                resolve();
                return;
            }

            reject(
                new Error(
                    signal
                        ? `${command} exited after ${signal}`
                        : `${command} exited with code ${code}`,
                ),
            );
        });
    });
}

async function findImages(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    const images = [];

    for (const entry of entries) {
        const entryPath = path.join(directory, entry.name);
        if (entry.isDirectory()) {
            images.push(...(await findImages(entryPath)));
        } else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
            images.push(entryPath);
        }
    }

    return images;
}

function formatKilobytes(bytes) {
    return `${Math.round(bytes / 1_000)} KB`;
}

await run("cwebp", ["-version"]);

const images = await findImages(articlesDirectory);
let converted = 0;
let skipped = 0;

for (const sourcePath of images) {
    const extension = path.extname(sourcePath);
    const isWebP = extension.toLowerCase() === ".webp";
    const sourceStats = await stat(sourcePath);
    const relativeSource = path.relative(articlesDirectory, sourcePath);

    if (isWebP && sourceStats.size <= TARGET_BYTES + TOLERANCE_BYTES) {
        console.log(`Skipping ${relativeSource} (${formatKilobytes(sourceStats.size)})`);
        skipped += 1;
        continue;
    }

    const outputPath = isWebP
        ? sourcePath
        : sourcePath.slice(0, -extension.length) + ".webp";
    const temporaryPath = `${outputPath}.${process.pid}.tmp.webp`;

    console.log(`Compressing ${relativeSource}`);
    try {
        await run("cwebp", [
            "-quiet",
            "-mt",
            "-metadata",
            "none",
            "-q",
            String(MAX_QUALITY),
            "-qrange",
            "0",
            String(MAX_QUALITY),
            "-size",
            String(TARGET_BYTES),
            "-pass",
            "10",
            sourcePath,
            "-o",
            temporaryPath,
        ]);

        const outputStats = await stat(temporaryPath);
        if (outputStats.size === 0) {
            throw new Error(`cwebp produced an empty file for ${relativeSource}`);
        }

        await rename(temporaryPath, outputPath);
        if (sourcePath !== outputPath) {
            await rm(sourcePath);
        }

        console.log(
            `Wrote ${path.relative(articlesDirectory, outputPath)} (${formatKilobytes(outputStats.size)})`,
        );
        converted += 1;
    } catch (error) {
        await rm(temporaryPath, { force: true });
        throw error;
    }
}

console.log(`Done: ${converted} compressed, ${skipped} skipped.`);
