'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var nano = require(`cssnano`);
var autoprefixer = require(`autoprefixer`)
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer({browsers: ['last 5 versions']}),nano()]))
    .pipe(gulp.dest('./css'));
});
