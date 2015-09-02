'use strict';

var gulp = require('gulp');
var config = require('ng-factory').use(gulp);
var karma = require('gulp-karma');

var testFiles = ['test/*.js'];

gulp.task('test', function() {
    // Be sure to return the stream
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task('build', gulp.series('ng:build'));

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', gulp.series('ng:dist/scripts'));
    gulp.watch('src/**/*.scss', gulp.series('ng:dist/styles'));
    gulp.watch('src/**/*.jade', gulp.series('ng:dist/templates'));
});

gulp.task('default', ['build', 'watch']);
