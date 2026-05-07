const fs = require('fs');
const path = require('path');
const hDir = path.join(process.env.APPDATA, 'Code/User/History');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walkDir(file));
        } else { 
            if (file.endsWith('entries.json')) {
                results.push(file);
            }
        }
    });
    return results;
}

try {
    const entriesFiles = walkDir(hDir);
    let matchedFiles = [];
    for (const eFile of entriesFiles) {
        try {
            const data = JSON.parse(fs.readFileSync(eFile, 'utf8'));
            const sourcePath = data.resource || data.source || "";
            if (sourcePath.includes('services') && sourcePath.includes('[slug]') && sourcePath.includes('page.tsx')) {
                const dir = path.dirname(eFile);
                if (data.entries && data.entries.length > 0) {
                    const latestEntry = data.entries[data.entries.length - 1];
                    const backupPath = path.join(dir, latestEntry.id);
                    if (fs.existsSync(backupPath) && fs.statSync(backupPath).size > 1000) {
                        matchedFiles.push({ path: backupPath, mtime: fs.statSync(backupPath).mtimeMs });
                    }
                }
            }
        } catch (e) {}
    }
    
    if (matchedFiles.length > 0) {
        matchedFiles.sort((a, b) => b.mtime - a.mtime);
        console.log("FOUND BACKUP:", matchedFiles[0].path);
        fs.copyFileSync(matchedFiles[0].path, path.join(__dirname, 'src/app/services/[slug]/page.tsx'));
        console.log("Restored!");
    } else {
        console.log("No backup found.");
    }
} catch (e) {
    console.error(e);
}
