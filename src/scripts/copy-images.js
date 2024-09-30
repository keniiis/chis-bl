import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Para obtener correctamente __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = path.join(__dirname, '../public/images');
const targetDir = path.join(__dirname, '../.vercel/output/static/images');

fs.copySync(sourceDir, targetDir, { overwrite: true });
console.log('Images copied successfully');
