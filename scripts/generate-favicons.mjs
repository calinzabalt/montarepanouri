import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "src/app/icon.svg"));

const sizes = [16, 32, 48, 192];
const pngBuffers = [];

for (const size of sizes) {
  const png = await sharp(svg).resize(size, size).png().toBuffer();
  pngBuffers.push(png);
  writeFileSync(join(root, `public/favicon-${size}.png`), png);
}

writeFileSync(join(root, "public/favicon.ico"), pngToIco(pngBuffers.slice(0, 3)));
writeFileSync(join(root, "public/icon.svg"), svg);
writeFileSync(join(root, "public/apple-icon.png"), pngBuffers[3]);

// Next.js reads favicons from src/app/, not public/ — public/ alone keeps the default Next icon in dev.
writeFileSync(join(root, "src/app/favicon.ico"), pngToIco(pngBuffers.slice(0, 3)));
writeFileSync(join(root, "src/app/apple-icon.png"), pngBuffers[3]);

console.log("Generated favicons in public/ and src/app/");

function pngToIco(images) {
  const count = images.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = images.map((image, index) => {
    const size = index === 0 ? 16 : index === 1 ? 32 : 48;
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(image.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += image.length;
    return entry;
  });

  return Buffer.concat([
    Buffer.from([0, 0, 1, 0, count, 0]),
    ...entries,
    ...images,
  ]);
}
