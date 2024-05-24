// generate-matrix.js

const fs = require('fs');

const totalBatches = process.argv[2] || 150;
const matrix = Array.from({ length: totalBatches }, (_, i) => i + 1);

fs.writeFileSync('matrix.json', JSON.stringify(matrix));
