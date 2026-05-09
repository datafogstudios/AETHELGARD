const fs = require('fs');
const path = require('path');

const colorMap = {
  "#06150F": "#00244A",
  "#0B2d20": "#00244A",
  "#0A2218": "#00244A",
  "#1A382A": "#6A6F75",
  "#D4AF37": "#F7E7CE",
  "#C5A030": "#E3D3BA",
  "#FAFAFA": "#F9F9F9"
};

const files = [
  'src/pages/Home.tsx',
  'src/components/Header.tsx',
  'src/components/LivePricesWidget.tsx',
  'src/components/Logo.tsx'
];

for (const file of files) {
  let p = path.join(process.cwd(), file);
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, 'utf8');
  for (const [key, val] of Object.entries(colorMap)) {
    content = content.replace(new RegExp(key, 'gi'), val);
  }
  fs.writeFileSync(p, content);
}
console.log("Colors replaced successfully.");
