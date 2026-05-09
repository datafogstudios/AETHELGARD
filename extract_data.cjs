const fs = require('fs');
const appTsx = fs.readFileSync('src/App.tsx', 'utf8');
const lines = appTsx.split('\n');

const imports = lines.slice(0, 69).join('\n');
const data = lines.slice(69, 794).join('\n');

let newData = imports + '\n' + data;
newData = newData.replace(/const homeCourses/g, 'export const homeCourses');
newData = newData.replace(/const strategies/g, 'export const strategies');
newData = newData.replace(/const allCourses/g, 'export const allCourses');
newData = newData.replace(/const beginnerModules/g, 'export const beginnerModules');
newData = newData.replace(/const platformMasteryModules/g, 'export const platformMasteryModules');
newData = newData.replace(/const institutionalOrderFlowModules/g, 'export const institutionalOrderFlowModules');
newData = newData.replace(/const riskProtocolModules/g, 'export const riskProtocolModules');
newData = newData.replace(/const technicalAnalysisModules/g, 'export const technicalAnalysisModules');
newData = newData.replace(/const marketPsychologyModules/g, 'export const marketPsychologyModules');
newData = newData.replace(/const analysisReports/g, 'export const analysisReports');

newData += `
export const intermediateModules = technicalAnalysisModules;
export const advancedModules = institutionalOrderFlowModules;
export const specializedModules = riskProtocolModules;
`;

fs.writeFileSync('src/data.tsx', newData);
console.log('Data extracted to src/data.tsx');
