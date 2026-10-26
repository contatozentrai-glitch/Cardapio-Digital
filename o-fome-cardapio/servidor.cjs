// Servidor local opcional. Também é possível abrir index.html diretamente.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const tipos = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml' };
const porta = Number(process.env.PORT || 4180);
http.createServer((req, res) => {
  let caminho;
  try { caminho = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400); return res.end('Endereço inválido'); }
  const arquivo = path.resolve(__dirname, '.' + (caminho === '/' ? '/index.html' : caminho));
  if (!arquivo.startsWith(__dirname + path.sep)) { res.writeHead(403); return res.end('Acesso negado'); }
  fs.readFile(arquivo, (erro, dados) => {
    if (erro) { res.writeHead(404); return res.end('Arquivo não encontrado'); }
    res.writeHead(200, { 'Content-Type': tipos[path.extname(arquivo)] || 'application/octet-stream' });
    res.end(dados);
  });
}).listen(porta, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${porta}`));
