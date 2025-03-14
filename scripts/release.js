import exec from 'exec-sh';
import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';
import * as url from 'url';

const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)));
const childPkg = JSON.parse(fs.readFileSync(new URL('../src/copy/package.json', import.meta.url)));
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

async function release() {
  // Set version
  pkg.version = childPkg.version;
  // Copy dependencies
  childPkg.dependencies = pkg.dependencies;
  fs.writeFileSync(path.resolve(__dirname, '../package.json'), `${JSON.stringify(pkg, null, 2)}\n`);
  fs.writeFileSync(
    path.resolve(__dirname, '../src/copy/package.json'),
    `${JSON.stringify(childPkg, null, 2)}\n`,
  );
  const cleanPackage = [
    'components',
    'core',
    'modules',
    'react',
    'shared',
    'types',
    '**/*.js',
    '*.js',
    '**/*.ts',
    '*.ts',
    '**/*.css',
    '*.css',
    '**/*.map',
    '*.map',
    '**/*.less',
    '*.less',
    '**/*.scss',
    '*.scss',
    '**/*.svelte',
    '*.svelte',
  ];
  cleanPackage.map((p) => rimraf.sync(`./dist/${p}`));
  await exec.promise(`npm run build:prod`);
  await exec.promise('cd ./dist && npm publish');
}
release();
