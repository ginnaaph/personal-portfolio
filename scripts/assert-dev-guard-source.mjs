import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const appFile = join(process.cwd(), 'src', 'App.tsx');
const navFile = join(process.cwd(), 'src', 'components', 'navigation', 'Navigation.tsx');

function checkApp() {
  const src = readFileSync(appFile, 'utf8');
  const hasDevGuard = src.includes('import.meta.env.DEV') && src.includes('explorations/admin');
  if (!hasDevGuard) {
    throw new Error('Admin route DEV guard not found in App.tsx');
  }
}

function checkNav() {
  const src = readFileSync(navFile, 'utf8');
  const hasDevGuard = src.includes('import.meta.env.DEV') && src.includes('Admin') && src.includes('explorations/admin');
  if (!hasDevGuard) {
    throw new Error('Admin DEV guard not found in Navigation.tsx');
  }
}

try {
  checkApp();
  checkNav();
  console.log('✅ DEV guards present in source for Admin route and nav.');
  process.exit(0);
} catch (e) {
  console.error('❌', e.message);
  process.exit(1);
}
