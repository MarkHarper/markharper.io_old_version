// Import all packages needed for the build
var gulp = require('gulp');
var watch = require('gulp-watch');

// Common patterns used throughout the gulp configuration
var src = {
  allFont: './app/**/*.{ttf,woff,otf,eot}',
  allImg: './app/**/*.{pdf,png,svg}'
};

// The default task is what runs when you type 'gulp' in the terminal
gulp.task('default', function () {
  return gulp.start('img', 'font', 'watch');
});

// The watch task watches a directory for changes and tells the
// browser(s) connected to the server to refresh. I also made this name
// up. In fact, the only name that has intrinsic meaning to gulp is the
// 'default' task.
gulp.task('watch', function () {
  watch(src.allImg, function () {
    gulp.start('img');
  });

  watch(src.allFont, function () {
    gulp.start('font');
  });
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
