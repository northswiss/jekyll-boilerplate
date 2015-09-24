var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task('build', shell.task(['jekyll build --watch']));

gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}, notify: false});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);