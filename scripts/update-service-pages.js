const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '../app/services');
const services = fs.readdirSync(servicesDir).filter(f => fs.statSync(path.join(servicesDir, f)).isDirectory());

services.forEach(service => {
  const pagePath = path.join(servicesDir, service, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Skip if already processed
  if (content.includes('getProjectImagesByCategory')) return;

  // Add import
  content = content.replace(
    /import { PrimaryButton, SecondaryButton } from "@\/components\/ui\/Button";/,
    `import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";\nimport { getProjectImagesByCategory } from "@/sanity/lib/api";`
  );

  // Update HeroProjectColumn definition
  content = content.replace(
    /function HeroProjectColumn\(\) {/,
    `function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;`
  );

  // Use displayImages instead of heroProjectImages
  content = content.replace(
    /heroProjectImages\.map\(\(src, index\)/g,
    `displayImages.map((src, index)`
  );

  // Update main component definition
  const componentMatch = content.match(/export default function ([a-zA-Z]+Page)\(\) {/);
  if (componentMatch) {
    const componentName = componentMatch[1];
    content = content.replace(
      /export default function [a-zA-Z]+Page\(\) {/,
      `export default async function ${componentName}() {\n  const sanityImages = await getProjectImagesByCategory("${service}");`
    );
  }

  // Pass props
  content = content.replace(
    /<HeroProjectColumn \/>/,
    `<HeroProjectColumn sanityImages={sanityImages} />`
  );

  fs.writeFileSync(pagePath, content, 'utf8');
});

console.log('Successfully updated all service pages!');
