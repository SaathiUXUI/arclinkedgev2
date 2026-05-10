const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '../app/services');
const services = fs.readdirSync(servicesDir).filter(f => fs.statSync(path.join(servicesDir, f)).isDirectory());

services.forEach(service => {
  const pagePath = path.join(servicesDir, service, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Skip if already processed for logos
  if (content.includes('getBrandLogos')) return;

  // Add import for getBrandLogos
  content = content.replace(
    /import { getProjectImagesByCategory } from "@\/sanity\/lib\/api";/,
    `import { getProjectImagesByCategory, getBrandLogos } from "@/sanity/lib/api";`
  );

  // Fetch getBrandLogos in the component body
  const componentMatch = content.match(/export default async function ([a-zA-Z]+Page)\(\) {\n  const sanityImages = await getProjectImagesByCategory\("([^"]+)"\);/);
  if (componentMatch) {
    const componentName = componentMatch[1];
    const category = componentMatch[2];
    content = content.replace(
      /export default async function [a-zA-Z]+Page\(\) {\n  const sanityImages = await getProjectImagesByCategory\("[^"]+"\);/,
      `export default async function ${componentName}() {\n  const sanityImages = await getProjectImagesByCategory("${category}");\n  const sanityLogos = await getBrandLogos();`
    );
  }

  // Pass sanityLogos to SharedInsidePageSections
  content = content.replace(
    /<SharedInsidePageSections/g,
    `<SharedInsidePageSections sanityLogos={sanityLogos}`
  );

  fs.writeFileSync(pagePath, content, 'utf8');
});

console.log('Successfully updated all service pages with sanityLogos!');
