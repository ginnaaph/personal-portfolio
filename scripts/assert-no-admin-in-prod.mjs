import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST_DIR = join(process.cwd(), 'dist');
const NEEDLES = [
  '/explorations/admin',
  'ExplorationAdminPg',
  './explorations/pages/ExplorationAdminPg',
];

function* walk(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

function main() {
  let found = [];
  for (const file of walk(DIST_DIR)) {
    if (!file.endsWith('.js')) continue;
    const content = readFileSync(file, 'utf8');
    for (const needle of NEEDLES) {
      if (content.includes(needle)) {
        found.push({ file, needle });
      }
    }
  }

  if (found.length) {
    console.error('Admin route/page detected in production build:', found);
    process.exit(1);
  } else {
    console.log('✅ Admin route/page not present in production build.');
  }
}

main();
