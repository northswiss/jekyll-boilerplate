var gulp =              require('gulp'),
    shell =             require('gulp-shell'),
    browserSync =       require('browser-sync').create(),
    uglify =            require('gulp-uglify'),
    concat =            require('gulp-concat'),
    del =               require('del'),
    svgSprite =         require('gulp-svg-sprite');

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

// Inline SVGs FTW
var svgConfig = {
    shape : {
        dimension : { // Set maximum dimensions
            maxWidth : 32,
            maxHeight : 32
        }
    },
    mode : {
        symbol : true // Activate the «symbol» mode
    }
};
gulp.task('svg',function(){
    return gulp.src('_svgs/**/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('_includes'));
});

gulp.task('clean', function () {
    return del([
        './_site/js/**/*.js',
        '!./_site/js/vendor/modernizr-2.8.3.min.js'
    ]);
});

gulp.task('compressScripts', function() {
    return gulp.src(['./js/main.js', './js/analytics.js'])// Add all JS files here that you want to concat & minify to main.js
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./_site/js'));
});

gulp.task('default', ['build', 'serve']);

// TODO: Add support for image min, SVG inlining etc
gulp.task('prod', ['clean', 'compressScripts']);