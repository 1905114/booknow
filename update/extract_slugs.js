const fs = require('fs');
const content = fs.readFileSync('src/config/services.ts', 'utf-8');
const slugs = [...content.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
console.log(slugs);
