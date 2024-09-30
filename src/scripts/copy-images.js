const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, '../public/images');
const targetDir = path.join(__dirname, '../.vercel/output/static/images');

fs.copySync(sourceDir, targetDir, { overwrite: true });
console.log('Images copied successfully');