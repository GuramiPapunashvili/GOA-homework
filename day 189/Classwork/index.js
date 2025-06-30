import fs from 'fs';

for (let i = 1; i <= 2000; i++) {
  fs.writeFileSync(`./nikka/file_${i}.txt`, `I LOVE GOA - ${i}`);
}

console.log('PC Fried Done');