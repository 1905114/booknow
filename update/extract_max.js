const fs = require('fs');
const logPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\c7fe8744-3e27-4494-b406-5512b297ae98\\.system_generated\\logs\\overview.txt';
const logText = fs.readFileSync(logPath, 'utf8');
const lines = logText.split('\n');

let maxFileContent = "";

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('TOOL_CALL_RESPONSE') && line.includes('page.tsx')) {
        try {
            const data = JSON.parse(line);
            if (data.content && data.content.includes('Showing lines 1 to')) {
                const contentLines = data.content.split('\n');
                let extracted = [];
                let inCode = false;
                for (let j = 0; j < contentLines.length; j++) {
                    const cl = contentLines[j];
                    if (cl.match(/^\d+:/)) {
                        extracted.push(cl.replace(/^\d+:\s?/, ''));
                        inCode = true;
                    } else if (inCode && cl.includes('The above content shows')) {
                        break;
                    }
                }
                const contentStr = extracted.join('\n');
                if (contentStr.length > maxFileContent.length) {
                    maxFileContent = contentStr;
                }
            }
        } catch (e) {}
    }
}

if (maxFileContent.length > 0) {
    console.log("FOUND MAX CONTENT. Length: ", maxFileContent.length);
    fs.writeFileSync('d:\\client_spiritual_website-silviya\\max_view.txt', maxFileContent);
} else {
    console.log("NO FULL VIEW FOUND.");
}
