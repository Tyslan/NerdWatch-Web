var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');

var plugins = gulpLoadPlugins();

var  testFolder = './test';

gulp.task('runTests', function(){
    return gulp.src(testFolder + '/*js')
        .pipe(plugins.mocha());
});

gulp.task('compress', function() {
    console.log(plugins);
    return gulp.src('public/js/**/*.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest('public/dist/js'));
});