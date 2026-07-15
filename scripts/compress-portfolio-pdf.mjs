/**
 * One-off compression script (Revisi klien putaran 2A, poin 5).
 *
 * The client's source portfolio PDF ("PORTOFOLIO NOLA 2026.pdf", ~124MB) is
 * far too large to commit to git (GitHub's 100MB single-file limit) or to
 * ship as a website download. This renders every page to a JPEG raster at a
 * reduced DPI/quality via `mupdf` (WASM, pure Node — no system Ghostscript/
 * poppler install needed) and reassembles those JPEGs into a new PDF via
 * `pdf-lib`, at the same page dimensions as the original (so it still looks
 * like a normal single-page-per-spread PDF, just lower-resolution).
 *
 * Usage (run once from `site/`, from the repo you're currently in):
 *   node scripts/compress-portfolio-pdf.mjs
 *
 * Reads:  ../"PORTOFOLIO NOLA 2026.pdf" (repo root, one level above `site/`)
 * Writes: public/nola-amallia-putri-portfolio.pdf
 *
 * Tune DPI_TARGET / JPEG_QUALITY below if the output is still too large or
 * too soft — see the PRD/task notes for the target (10-25MB, legible on
 * screen).
 */
import mupdf from "mupdf";
import { PDFDocument } from "pdf-lib";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_PATH = path.resolve(__dirname, "../../PORTOFOLIO NOLA 2026.pdf");
const OUT_PATH = path.resolve(__dirname, "../public/nola-amallia-putri-portfolio.pdf");

const DPI_TARGET = 150;
const JPEG_QUALITY = 85;

function fmtMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

async function main() {
  console.log(`Reading source: ${SRC_PATH}`);
  const srcBuf = fs.readFileSync(SRC_PATH);
  console.log(`Source size: ${fmtMB(srcBuf.length)}`);

  const doc = mupdf.Document.openDocument(srcBuf, "application/pdf");
  const pageCount = doc.countPages();
  console.log(`Pages: ${pageCount}`);

  const outDoc = await PDFDocument.create();
  const scale = DPI_TARGET / 72;

  const t0 = Date.now();
  for (let i = 0; i < pageCount; i++) {
    const page = doc.loadPage(i);
    const bounds = page.getBounds(); // [x0, y0, x1, y1] in PDF points (1/72in)
    const widthPt = bounds[2] - bounds[0];
    const heightPt = bounds[3] - bounds[1];

    const pixmap = page.toPixmap(
      mupdf.Matrix.scale(scale, scale),
      mupdf.ColorSpace.DeviceRGB,
      false
    );
    const jpegBytes = pixmap.asJPEG(JPEG_QUALITY, false);
    pixmap.destroy();
    page.destroy();

    const image = await outDoc.embedJpg(jpegBytes);
    const outPage = outDoc.addPage([widthPt, heightPt]);
    outPage.drawImage(image, { x: 0, y: 0, width: widthPt, height: heightPt });

    if ((i + 1) % 10 === 0 || i === pageCount - 1) {
      console.log(`  rendered ${i + 1}/${pageCount} pages...`);
    }
  }

  const outBytes = await outDoc.save();
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, outBytes);

  const seconds = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`Done in ${seconds}s.`);
  console.log(`Output: ${OUT_PATH}`);
  console.log(`Output size: ${fmtMB(outBytes.length)} (${outBytes.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
