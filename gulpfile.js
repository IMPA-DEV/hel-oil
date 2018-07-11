'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pug          = require('gulp-pug');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/sass/*.sass")
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

// pug
gulp.task('pug', function buildHTML() {
  return gulp.src('./app/pug/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('app/'))
});

//watch
gulp.task('watch', ['sass', 'pug'], function (){
  gulp.watch('app/sass/*.sass', ['sass']);
  gulp.watch('app/pug/*.pug', ['pug']);
  gulp.watch("app/**/*.html").on("change", browserSync.reload);
  gulp.watch("app/css/*.css").on("change", browserSync.reload);
  gulp.watch("app/js/**/*.js").on("change", browserSync.reload);
});

gulp.task('default', ['serve', 'watch']);