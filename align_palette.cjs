const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) processDir(full);
        else if (full.endsWith('.tsx') || full.endsWith('.ts') || full.endsWith('.css')) {
            let content = fs.readFileSync(full, 'utf8');
            let orig = content;
            // Update colors
            content = content.replace(/#1E56A0/gi, '#002B5B');
            content = content.replace(/#E85D22/gi, '#D4AF37');
            content = content.replace(/#0A192F/gi, '#1A1A1A');
            // Check for buttons hovering to D4AF37 where they should hover to B8860B if the text doesn't explicitly mention text hover
            // hover:text-[#D4AF37] is fine.
            // But if it was an orange hover:bg-[#d04e1b], we change that to hover:bg-[#B8860B]
            content = content.replace(/#d04e1b/gi, '#B8860B');
            // hover:bg-[#17427b] (darker blue) -> hover:bg-[#001f40] (darker indigo)
            content = content.replace(/#17427b/gi, '#001f40');

            if (content !== orig) {
                fs.writeFileSync(full, content);
            }
        }
    });
}
processDir('src');
console.log('Palette alignment completed');
