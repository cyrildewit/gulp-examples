//
// Require:
// - gulp-html-minifier
//

gulp.task('html', function() {
	return gulp.src('./src/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./public/'))
		.pipe(browserSync.reload({stream:true}));
});
