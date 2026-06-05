const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Fix path to point correctly to public/images
const imgDir = path.join(__dirname, '../public/images');

async function processImages() {
  const files = fs.readdirSync(imgDir);

  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const inputPath = path.join(imgDir, file);
      const outputPath = path.join(imgDir, `${name}.webp`);

      if (fs.existsSync(outputPath)) {
        console.log(`La versión WebP de ${file} ya existe. Eliminando el original pesado...`);
        fs.unlinkSync(inputPath);
      } else {
        console.log(`Convirtiendo ${file} a WebP...`);
        try {
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          console.log(`✅ Convertido. Eliminando original ${file}...`);
          fs.unlinkSync(inputPath);
        } catch (err) {
          console.error(`❌ Error convirtiendo ${file}:`, err);
        }
      }
    }
  }
  console.log('¡Optimización de imágenes completada!');
}

processImages();
