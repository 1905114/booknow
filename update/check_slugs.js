const fs = require('fs');
const content = fs.readFileSync('src/config/services.ts', 'utf-8');
const match1 = content.match(/title:.*Child.*Memory.*\n.*slug:.*"([^"]+)"/i);
const match2 = content.match(/title:.*Business.*Energy.*\n.*slug:.*"([^"]+)"/i);
const match3 = content.match(/title:.*Pregnant.*Women.*\n.*slug:.*"([^"]+)"/i);
console.log(match1 ? match1[1] : 'not found 1');
console.log(match2 ? match2[1] : 'not found 2');
console.log(match3 ? match3[1] : 'not found 3');
