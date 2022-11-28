const { src, dest, series, parallel } = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');

function clean() {
  return del(['./build']);
}

function compileCss() {
  return src('./src/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(dest('./build'))
}

function compileTypescript() {
  return src(['./src/index.ts', './src/**/*.ts*'])
    .pipe(ts({
      target: 'es6',
      lib: ['es6', 'DOM'],
      jsx: 'react-jsx',
      module: 'esnext',
      moduleResolution: 'node',
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      strict: true,
      skipLibCheck: true,
      declaration: true,
    }))
    .pipe(dest('./build'))
}

/*
  Task-ToDos:
  - [x] Gather and compile all scss into one css file
  - [x] Gather and compile all ts(x) files into one js file (esm/umd?)
  - [x] Gather all .d.ts and pack them into 1 global .d.ts file
  - [ ] Optionally uglify ouput of 1 and 2
*/

exports.all = series(clean, parallel(compileCss, compileTypescript))
exports.tsx = series(clean, compileTypescript);
exports.css = series(clean, compileCss);
