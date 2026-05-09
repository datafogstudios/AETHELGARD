import fs from "fs";

const content = fs.readFileSync("src/data.tsx", "utf-8");
const updated = content.replace(/title: "Glossary: ([^"]+)", path: "\/glossary"/g, 'title: "Glossary: $1", path: "/glossary?term=$1"');
fs.writeFileSync("src/data.tsx", updated);
console.log("Updated data.tsx glossary links");
