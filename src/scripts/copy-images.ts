import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Definir las rutas de origen y destino
const sourceDir: string = path.join(__dirname, '../public/images');
const targetDir: string = path.join(__dirname, '../.vercel/output/static/images');

// Copiar las imágenes
fs.copySync(sourceDir, targetDir, { overwrite: true });
console.log('Images copied successfully');
