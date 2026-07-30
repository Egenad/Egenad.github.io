import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import projects from '../src/data/projects.json' with { type: 'json' };

const PUBLIC_DIR = path.resolve('public');
const OG_DIR = path.join(PUBLIC_DIR, 'images', 'og');

if (!fs.existsSync(OG_DIR)) {
  fs.mkdirSync(OG_DIR, { recursive: true });
}

for (const project of projects) {
  const inputPath = path.join(PUBLIC_DIR, project.featuredImage);
  const outputPath = path.join(OG_DIR, `${project.slug}.jpg`);

  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠️  No existe: ${inputPath}`);
    continue;
  }

  await sharp(inputPath)
    .resize(400, 400, { fit: 'cover', position: 'centre' })
    .flatten({ background: '#000000' }) // por si el PNG original tiene transparencia
    .jpeg({ quality: 85 })
    .toFile(outputPath);

  console.log(`✅ ${project.slug}.jpg generado`);
}