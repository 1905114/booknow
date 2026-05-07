const fs = require('fs');
const path = require('path');

const hDir = path.join(process.env.APPDATA, 'Code/User/History');
let foundFiles = [];

function searchFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            searchFiles(fullPath);
        } else {
            if (stat.size < 100000 && stat.size > 2000) { // filter by reasonable size
                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    if (content.includes('business-energy-alignment') && content.includes('import { notFound } from "next/navigation"')) {
                        foundFiles.push({ path: fullPath, mtime: stat.mtimeMs });
                    }
                } catch (e) {}
            }
        }
    }
}

console.log("Searching in:", hDir);
searchFiles(hDir);
foundFiles.sort((a, b) => b.mtime - a.mtime);

if (foundFiles.length > 0) {
    console.log("Found backup file!");
    const targetPath = path.join(__dirname, 'src/app/services/[slug]/page.tsx');
    fs.copyFileSync(foundFiles[0].path, targetPath);
    console.log("Restored to:", targetPath);
} else {
    console.log("No backup found.");
}
