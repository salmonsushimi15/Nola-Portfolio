// One-off utility to (re)generate favicon.ico, apple-touch-icon.png, and the
// default OG image from public/favicon.svg + the design-system colors.
// Run with: node scripts/generate-images.mjs
// Re-run this any time the brand mark or OG copy needs to change.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");

const faviconSvg = fs.readFileSync(path.join(PUBLIC, "favicon.svg"));

// --- favicon.ico (16/32/48 multi-size) ---
const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(
  icoSizes.map((size) =>
    sharp(faviconSvg, { density: 384 }).resize(size, size).png().toBuffer()
  )
);
const icoBuffer = await pngToIco(icoBuffers);
fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), icoBuffer);
console.log("favicon.ico written:", icoBuffer.length, "bytes");

// --- apple-touch-icon.png (180x180) ---
await sharp(faviconSvg, { density: 384 })
  .resize(180, 180)
  .png()
  .toFile(path.join(PUBLIC, "apple-touch-icon.png"));
console.log("apple-touch-icon.png written");

// --- og-default.jpg (1200x630) ---
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#faf6f0"/>
  <text x="1170" y="520" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="420" fill="#bc5a34" opacity="0.10">01</text>
  <rect x="0" y="0" width="26" height="630" fill="#bc5a34"/>
  <text x="112" y="272" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="82" fill="#2d2420">Nola Amallia Putri</text>
  <text x="112" y="326" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="30" letter-spacing="6" fill="#93401f">ARCHITECTURE PORTFOLIO</text>
  <text x="112" y="378" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="24" fill="#2d2420" opacity="0.6">Bandar Lampung, Indonesia &#183; Junior Architect</text>
</svg>
`;
await sharp(Buffer.from(ogSvg), { density: 288 })
  .jpeg({ quality: 90 })
  .toFile(path.join(PUBLIC, "og-default.jpg"));
console.log("og-default.jpg written");
