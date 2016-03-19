gulp.task('name-of-task', function() {
	gulp.src('./path/of/location/one/filename.extension')
		.pipe(gulp.dest('./path/of/location/two/'));
});



//
// Every file inside the whole directory with the extension of...
//

gulp.task('name-of-task', function() {
	gulp.src('./path/of/location/one/**/*.filename.extension')
		.pipe(gulp.dest('./path/of/location/two/'));
});
