var gulp = new require('gulp');
var pug = new require('gulp-pug');
var browserSync = new require('browser-sync');
var reload = browserSync.reload;

gulp.task('pug', function() {
    return gulp.src('pug/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./*.html').on('change', reload);
    gulp.watch('pug/**/*.pug', ['pug']).on('change', reload);
})