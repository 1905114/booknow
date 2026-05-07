const fs = require('fs');

const logPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\fe4f80e7-5760-434d-b7d5-9c3e1e754b7c\\.system_generated\\logs\\overview.txt';
const logText = fs.readFileSync(logPath, 'utf8');
const lines = logText.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('PLANNER_RESPONSE') && line.includes('write_to_file') && line.includes('page.tsx')) {
        try {
            const data = JSON.parse(line);
            for (let call of data.tool_calls) {
                if (call.name === 'write_to_file' && call.args.TargetFile.includes('page.tsx')) {
                    fs.writeFileSync('d:\\client_spiritual_website-silviya\\base_page.tsx', call.args.CodeContent);
                    console.log("Extracted base_page.tsx");
                }
            }
        } catch (e) {}
    }
}
