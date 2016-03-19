//
// Require:
// - gulp-imagemin
//


gulp.task('image', function() {
	return gulp.src('./src/img/**/*.{png,gif,jpg}')
		.pipe(imagemin())
		.pipe(gulp.dest('./public/img/'));
});
