const fs = require('fs');
const path = require('path');

function replaceStr(dir) {
    fs.readdirSync(dir).forEach(file => {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) replaceStr(full);
        else if (full.endsWith('.tsx') || full.endsWith('.ts') || full.endsWith('.css')) {
            let content = fs.readFileSync(full, 'utf8');
            let orig = content;
            
            content = content.replace(/#f4f7fb/gi, '#F9F7F2');

            if (content !== orig) {
                fs.writeFileSync(full, content);
            }
        }
    });
}
replaceStr('src');
console.log('Done');
