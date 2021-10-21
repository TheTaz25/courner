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
      outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded',
    }).on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(dest('./build'))
}

function compileTypescript() {
  return src('./src/**/*.ts*')
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
      skipLibCheck: true
    }))
    .pipe(dest('./build/components'))
}

function compileDeclarations() {
  return src('./src/**/*.d.ts')
    .pipe(concat('courner.d.ts'))
    .pipe(dest('./build/'))
}

/*
  Task-ToDos:
  - [x] Gather and compile all scss into one css file
  - [x] Gather and compile all ts(x) files into one js file (esm/umd?)
  - [x] Gather all .d.ts and pack them into 1 global .d.ts file
  - [ ] Optionally uglify ouput of 1 and 2
*/

exports.all = series(clean, parallel(compileDeclarations, compileCss, compileTypescript))
exports.dts = series(clean, compileDeclarations);
exports.tsx = series(clean, compileTypescript);
exports.css = series(clean, compileCss);
