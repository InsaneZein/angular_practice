var gulp = require('gulp');
var open = require('gulp-open');

gulp.task('default', function() {
    gulp.src('./app/html/app.html').pipe(open());
});
