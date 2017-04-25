// //////////////////////////////////////////////////
// Required
// //////////////////////////////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    jade = require('gulp-jade'),
    del = require('del'),
    plumber = require('gulp-plumber');

// //////////////////////////////////////////////////
// Sctipts Task
// //////////////////////////////////////////////////

gulp.task('scripts', function(){
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
  .pipe(reload({stream:true}));
});

// //////////////////////////////////////////////////
// SASS Tasks
// //////////////////////////////////////////////////

gulp.task('sass', function(){
  gulp.src(['app/scss/style.scss', '!app/scss/**/*.mins.css'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('app/css/'))
  .pipe(reload({stream:true}));
});

// //////////////////////////////////////////////////
// Jade Tasks
// //////////////////////////////////////////////////

gulp.task('jade', function(){
  gulp.src('app/index.jade')
  .pipe(plumber())
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest('app/'))
  .pipe(reload({stream:true}));
});

// //////////////////////////////////////////////////
// Build Tasks
// //////////////////////////////////////////////////

// Clear out all files and folders from build folder
gulp.task('build:cleanfolder', function(cb) {
  del([
    'build'
  ], cb);
});

// Task to creat build directory for all files
gulp.task('build:copy', function() {
  return gulp.src('app/**/*/')
  .pipe(gulp.dest('build/'));
});

// Task to remove unwanted build files
// List all files and directories that shouldn't include
gulp.task('build:remove', ['build:copy'], function(cb) {
  del([
    'build/scss/',
    'build/js/!(*.min.js)',
    'build/jade',
    'build/*.jade'
  ], cb);
});

gulp.task('build', ['build:copy', 'build:remove']);

// //////////////////////////////////////////////////
// Browser-Sync Tasks
// //////////////////////////////////////////////////

gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: './app/'
    }
  });
});

// //////////////////////////////////////////////////
// Watch Tasks
// //////////////////////////////////////////////////

gulp.task('watch', function(){
  gulp.watch('app/js/*.js', ['scripts']);
  gulp.watch('app/scss/**/*.sass', ['sass']);
  gulp.watch('app/**/*.jade', ['jade']);
});

// //////////////////////////////////////////////////
// Default Task
// //////////////////////////////////////////////////

gulp.task('default', ['scripts', 'sass', 'jade', 'browser-sync', 'watch']);
