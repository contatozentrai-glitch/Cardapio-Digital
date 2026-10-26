// Copia somente os arquivos do site para a pasta de publicação.
const fs = require('node:fs');
const path = require('node:path');
const destino = path.join(__dirname, 'dist');
fs.mkdirSync(destino, { recursive: true });
for (const arquivo of ['index.html', 'css', 'js', 'assets']) {
  fs.cpSync(path.join(__dirname, arquivo), path.join(destino, arquivo), { recursive: true });
}
console.log('Site preparado em dist/.');
