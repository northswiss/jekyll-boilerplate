var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('build', shell.task(['jekyll build --watch']));

gulp.task('serve', function () {
    browserSync.init({
        server: {baseDir: '_site/'},
        notify: false,
        open: false
    });
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('clean', function () {
    return del([
        './_site/js/**/*.js',
        '!./_site/js/vendor/modernizr-2.8.3.min.js'
        // here we use a globbing pattern to match everything inside the `mobile` folder
        //'dist/mobile/**/*',
        // we don't want to clean this file though so we negate the pattern
    ]);
});

gulp.task('compressScripts', function() {
    return gulp.src(['./js/main.js'])// Add all JS files here that you want to concat & minify to main.js
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./_site/js'));
});

gulp.task('default', ['build', 'serve']);

// TODO: Add support for image min, SVG inlining etc
gulp.task('prod', ['clean', 'compressScripts']);