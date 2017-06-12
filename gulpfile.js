var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			host: '10.20.7.24',
			livereload: true,
			directoryListing: true,
			open: 'http://10.20.7.24:8000/index.html',
			proxies: [{
				source: '/abc',
				target: 'http://localhost:2200'
			},
			{
				source: '/egf',
				target: 'http://localhost:2093'
			}]
		}));
});