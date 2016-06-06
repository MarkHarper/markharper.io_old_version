// Import all packages needed for the build
var gulp = require('gulp');
var watch = require('gulp-watch');
var ghPages = require('gulp-gh-pages');

// Common patterns used throughout the gulp configuration
var src = {
  allFont: './app/**/*.{ttf,woff,otf,eot}',
  allImg: './app/**/*.{pdf,png,svg}',
  allProcessing: './app/processing/**'
};

// The default task is what runs when you type 'gulp' in the terminal
gulp.task('default', function () {
  return gulp.start('img', 'watch');
});

var options = {
    remoteUrl: "https://github.com/markharper/markharper.github.io.git",
    branch: "master",
    cname: 'markharper.io'};

// Deploy our src folder to gh-pages
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*').pipe(ghPages(options));
});

// The watch task watches a directory for changes and tells the
// browser(s) connected to the server to refresh. I also made this name
// up. In fact, the only name that has intrinsic meaning to gulp is the
// 'default' task.
gulp.task('watch', function () {
  watch(src.allImg, function () {
    gulp.start('img');
  });

  // watch(src.allFont, function () {
  //   gulp.start('font');
  // });

  // watch(src.allProcessing, function () {
  //   gulp.start('processing');
  // });
});

// Move any images to the dist folder
gulp.task('img', function () {
  return gulp.src(src.allImg)
    .pipe(gulp.dest('./dist'));
});

// Move any fonts to the dist folder
gulp.task('font', function () {
  return gulp.src(src.allFont)
    .pipe(gulp.dest('./dist'));
});

// Move any processing files to the dist folder
gulp.task('processing', function () {
  return gulp.src(src.allProcessing)
    .pipe(gulp.dest('./dist/processing'));
});
