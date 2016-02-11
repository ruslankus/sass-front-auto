

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync  = require('browser-sync').create();

gulp.task('browser-sync', ['styles'], function() {
		browserSync.init({
				server: {
						baseDir: "."
				},
				notify: false
		});
});

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
		.pipe(browserSync.stream());
});

//Watch task

gulp.task('watch', function () {
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('css/*.css').on("change", browserSync.reload);
	gulp.watch('js/*.js').on("change", browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);