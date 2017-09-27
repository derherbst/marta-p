'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var server = require("browser-sync").create();
var imagemin = require('gulp-imagemin');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

gulp.task('styles', function () {
  gulp.src('sass/style.scss')
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('css'))
    .pipe(server.stream());
});

gulp.task('image', function () {
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
});

gulp.task('scripts', function () {
  gulp.src('js/*.js')
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('minjs'))
    .pipe(server.stream());
});

//Watch task
//Watches JS

gulp.task('watch', function () {
  
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch("sass/**/*.{scss,sass}", ['styles']);
//  gulp.watch("img/*", ['image']);
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
