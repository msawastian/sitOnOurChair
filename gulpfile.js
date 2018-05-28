var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var sourcemap = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemap.init())
        .pipe(sass({outputStyle: 'compact'}, {errLogToConsole: true}, {sourceMap: true}))
        .on('error',function(e){
            console.error('gulpError', e)
        })
        .pipe(sourcemap.write())
        .pipe(gulp.dest('css'))
});

gulp.task('jshint', function () {
    return gulp.src('script.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('watch', function () {
    gulp.watch('**/*.scss', ['sass']);
});