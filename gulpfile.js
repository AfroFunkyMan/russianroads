var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss    = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();
gulp.task('sass', function () {
  return gulp.src('./src/css/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe( sourcemaps.init() )
    .pipe( postcss([ require('autoprefixer'), require('precss') ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('dist/css') );
});
gulp.task('js', function(){
  return gulp.src('./src/js/**/*.js')
    .pipe( sourcemaps.init() )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('dist/js') );
  });
gulp.task('jade', function() {
  var YOUR_LOCALS = {
    title :"starter kit page",
  };
  gulp.src('src/**/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('serve', ['sass', 'jade','js'], function() {
    browserSync.init({
        server: "./dist"
    });
    gulp.watch("src/**/*.sass", ['sass']);
    gulp.watch("src/**/*.jade", ['jade']);
    gulp.watch("src/**/*.js", ['js']);
    gulp.watch("src/**/*.jade").on('change', browserSync.reload);
});



gulp.task('default', ['serve']);
