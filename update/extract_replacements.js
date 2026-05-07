const fs = require('fs');
const logPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\c7fe8744-3e27-4494-b406-5512b297ae98\\.system_generated\\logs\\overview.txt';
const logText = fs.readFileSync(logPath, 'utf8');
const lines = logText.split('\n');

let allReplacements = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('PLANNER_RESPONSE')) {
        try {
            const data = JSON.parse(line);
            if (data.tool_calls) {
                for (let call of data.tool_calls) {
                    if (call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
                        if (call.args && call.args.TargetFile && call.args.TargetFile.includes('page.tsx')) {
                            if (call.args.ReplacementContent) {
                                allReplacements.push(call.args.ReplacementContent);
                            }
                            if (call.args.ReplacementChunks) {
                                const chunks = typeof call.args.ReplacementChunks === 'string' ? JSON.parse(call.args.ReplacementChunks) : call.args.ReplacementChunks;
                                for (let c of chunks) {
                                    allReplacements.push(c.ReplacementContent);
                                }
                            }
                        }
                    }
                }
            }
        } catch (e) {}
    }
}

fs.writeFileSync('d:\\client_spiritual_website-silviya\\replacements.txt', allReplacements.join('\n\n---NEXT---\n\n'));
