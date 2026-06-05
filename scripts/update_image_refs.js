const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../app');
const compDir = path.join(__dirname, '../components');
const libDir = path.join(__dirname, '../lib');
const contentDir = path.join(__dirname, '../content');

// Images that were converted
const imagesToUpdate = [
  'angel-ruiz-mago-corporativo', 'boda-magia-madrid', 'curriculum', 'foto-bio', 
  'foto-profesional-mirando-carta', 'foto-spring-cartas', 'IMG_20260531_162002',
  'logo-ahorramas', 'logo-alcampo', 'logo-escombrera', 'logo-gondomar', 'logo-grande',
  'logo-movistar', 'logo-pequeno', 'logo-pequeño', 'logo-senescal', 'logo-zeppelin',
  'magia-cocktail-empresa-madrid', 'magia-comuniones-madrid', 'magia-eventos-cocktail',
  'reacciones-magia-empresas', 'icon' // icon is in public root
];

function processDirectory(directory) {
  if (!fs.existsSync(directory)) return;
  
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const img of imagesToUpdate) {
        const regexPng = new RegExp(`${img}\\.png`, 'g');
        const regexJpg = new RegExp(`${img}\\.jpg`, 'g');
        const regexJpeg = new RegExp(`${img}\\.jpeg`, 'g');
        
        if (regexPng.test(content) || regexJpg.test(content) || regexJpeg.test(content)) {
          content = content.replace(regexPng, `${img}.webp`);
          content = content.replace(regexJpg, `${img}.webp`);
          content = content.replace(regexJpeg, `${img}.webp`);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated refs in ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
processDirectory(compDir);
processDirectory(libDir);
processDirectory(contentDir);

// Also update manifest.js and robots.js if needed (in app dir)
console.log('Update complete!');
