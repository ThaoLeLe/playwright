const fs = require('fs');
const path = require('path');
const invoices = require('./resources/invoices.json');

const chunkSize = 20;
const totalChunks = Math.ceil(invoices.length / chunkSize);

for (let i = 0; i < totalChunks; i++) {
  const chunk = invoices.slice(i * chunkSize, (i + 1) * chunkSize);
  console.log("dirname", __dirname);
  const filePath = path.join(__dirname, `./resources/invoices/invoice_batch_${i + 1}.json`);
  fs.writeFileSync(filePath, JSON.stringify(chunk, null, 2));
}

console.log(`Created ${totalChunks} invoice batch files.`);
