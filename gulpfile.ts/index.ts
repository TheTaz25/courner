const { src, dest, series } = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

function defaultTask(cb) {
  cb();
}

function clean() {
  return del(['./build']);
}

function compileCss() {
  return src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(dest('./build'))
}

function compileTypescript(cb) {
  cb();
}

function compileDeclarations(cb) {
  cb();
}

/*
  Task-ToDos:
  - [x] Gather and compile all scss into one css file
  - [ ] Gather and compile all ts(x) files into one js file (esm)
  - [ ] Gather all .d.ts and pack them into 1 global .d.ts file
  - [ ] Optionally uglify ouput of 1 and 2
*/

exports.css = series(clean, compileCss);
exports.default = defaultTask;
