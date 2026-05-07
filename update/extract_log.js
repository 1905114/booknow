const fs = require('fs');

const logPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\c7fe8744-3e27-4494-b406-5512b297ae98\\.system_generated\\logs\\overview.txt';
const logText = fs.readFileSync(logPath, 'utf8');
const lines = logText.split('\n');

let latestFileContent = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('TOOL_CALL_RESPONSE')) {
        try {
            const data = JSON.parse(line);
            if (data.content && data.content.includes('d:/client_spiritual_website-silviya/src/app/services/%5Bslug%5D/page.tsx')) {
                // Check if it's a full file view or replace file content
                if (data.content.includes('Showing lines 1 to')) {
                    const contentLines = data.content.split('\n');
                    let extracted = [];
                    let inCode = false;
                    for (let j = 0; j < contentLines.length; j++) {
                        const cl = contentLines[j];
                        if (cl.match(/^\d+:/)) {
                            // Extract line content, removing the leading line number and colon
                            extracted.push(cl.replace(/^\d+:\s?/, ''));
                            inCode = true;
                        } else if (inCode && cl.includes('The above content shows')) {
                            break;
                        }
                    }
                    if (extracted.length > 50) {
                        latestFileContent = extracted.join('\n');
                    }
                }
            }
        } catch (e) {}
    }
}

if (latestFileContent) {
    console.log("FOUND FULL CONTENT IN LOG. Length: ", latestFileContent.length);
    fs.writeFileSync('d:\\client_spiritual_website-silviya\\src\\app\\services\\[slug]\\page.tsx', latestFileContent);
    console.log("Restored!");
} else {
    console.log("COULD NOT FIND FULL VIEW_FILE CONTENT.");
    // Plan B: Reconstruct from replace_file_content calls if possible? No, we know there was a view_file call.
    // Let's just output the last replace_file_content TargetContent instead?
}
