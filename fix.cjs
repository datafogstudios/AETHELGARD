const fs = require('fs');
const path = require('path');

function fix(dir) {
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) fix(full);
        else if (full.endsWith('.tsx') || full.endsWith('.ts') || full.endsWith('.css')) {
            let content = fs.readFileSync(full, 'utf8');
            if (content.includes('#1A1A1A111')) {
                fs.writeFileSync(full, content.replace(/#1A1A1A111/g, '#1A1A1A'));
            }
        }
    }
}
fix('src');
console.log('done');
