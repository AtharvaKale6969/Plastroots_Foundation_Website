const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'Images');
const maxSizeKB = 0; // Process everything
const maxWidth = 1920;

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
        const sizeKB = stat.size / 1024;
        if (sizeKB > maxSizeKB) {
          console.log(`Processing ${fullPath} (${sizeKB.toFixed(2)} KB)`);
          const tempPath = fullPath + '.tmp';
          try {
            let image = sharp(fullPath);
            const metadata = await image.metadata();
            
            if (metadata.width > maxWidth) {
              image = image.resize({ width: maxWidth, withoutEnlargement: true });
            }

            if (ext === '.png') {
              await image.png({ quality: 80, compressionLevel: 8 }).toFile(tempPath);
            } else if (ext === '.webp') {
              await image.webp({ quality: 80 }).toFile(tempPath);
            } else if (ext === '.avif') {
              await image.avif({ quality: 80 }).toFile(tempPath);
            } else {
              await image.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
            }

            fs.renameSync(tempPath, fullPath);
            const newStat = fs.statSync(fullPath);
            const newSizeKB = newStat.size / 1024;
            const saved = ((sizeKB - newSizeKB) / sizeKB * 100).toFixed(1);
            if (newSizeKB < sizeKB) {
                console.log(`  -> Optimized: ${newSizeKB.toFixed(2)} KB (Saved ${saved}%)`);
            } else {
                console.log(`  -> File was already optimal (New: ${newSizeKB.toFixed(2)} KB)`);
            }
          } catch (err) {
            console.error(`Error processing ${fullPath}:`, err);
            if (fs.existsSync(tempPath)) {
              fs.unlinkSync(tempPath);
            }
          }
        }
      }
    }
  }
}

processDirectory(targetDir).then(() => console.log('Done optimizing ALL images!'));
