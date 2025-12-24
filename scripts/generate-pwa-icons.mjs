#!/usr/bin/env node

/**
 * PWA Icon Generator Script
 * 
 * This script helps generate all required PWA icons from a base icon.
 * 
 * Requirements:
 * - Install sharp: npm install --save-dev sharp
 * - Place your base icon (1024x1024px PNG) at: public/assets/socioly-favicon.png
 * 
 * Usage:
 * node scripts/generate-pwa-icons.mjs
 */

import sharp from "sharp";
import { existsSync, mkdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const publicDir = join(rootDir, "public");
const assetsDir = join(publicDir, "assets");

// Icon sizes required for PWA
const iconSizes = [
  // Standard PWA icons
  { size: 72, name: "icon-72x72.png" },
  { size: 96, name: "icon-96x96.png" },
  { size: 128, name: "icon-128x128.png" },
  { size: 144, name: "icon-144x144.png" },
  { size: 152, name: "icon-152x152.png" },
  { size: 192, name: "icon-192x192.png" },
  { size: 384, name: "icon-384x384.png" },
  { size: 512, name: "icon-512x512.png" },
  // Apple touch icons
  { size: 180, name: "apple-touch-icon.png" },
  // Favicons
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  // Microsoft tiles
  { size: 70, name: "mstile-70x70.png" },
  { size: 144, name: "mstile-144x144.png" },
  { size: 150, name: "mstile-150x150.png" },
  { size: 310, name: "mstile-310x310.png" },
  { size: 310, width: 310, height: 150, name: "mstile-310x150.png" },
];

const baseIconPath = join(assetsDir, "socioly-favicon.png");

async function generateIcons() {
  try {
    // Check if base icon exists
    if (!existsSync(baseIconPath)) {
      console.error(
        `❌ Base icon not found at: ${baseIconPath}\n` +
          "Please place a 1024x1024px PNG icon at this location."
      );
      process.exit(1);
    }

    console.log("🎨 Generating PWA icons...\n");

    // Generate all icons
    for (const icon of iconSizes) {
      const outputPath = join(publicDir, icon.name);
      const width = icon.width || icon.size;
      const height = icon.height || icon.size;

      await sharp(baseIconPath)
        .resize(width, height, {
          fit: "cover",
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .png()
        .toFile(outputPath);

      console.log(`✅ Generated: ${icon.name} (${width}x${height})`);
    }

    console.log("\n✨ All icons generated successfully!");
    console.log("\n📝 Next steps:");
    console.log("1. Verify all icons are in the /public directory");
    console.log("2. Test your PWA installation");
    console.log("3. Use Lighthouse to audit your PWA score");
  } catch (error) {
    console.error("❌ Error generating icons:", error);
    process.exit(1);
  }
}

generateIcons();

