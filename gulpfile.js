var gulp = require('gulp-param')(require('gulp'), process.argv);
var del = require('del');

gulp.task('prebuild', function(packageName) {
    console.log(`gulp prebuild packageName: ${packageName}`);

    del([
       'dist',
        'components',
        'static'
    ]);
});

gulp.task('postbuild', function(packageName) {

    console.log(`gulp postbuild packageName: ${packageName}`);
    // place code for your default task here

    gulp.src([`static/${packageName}/**`]).pipe(gulp.dest(`dist`));
    gulp.src([`static/${packageName}/**`]).pipe(gulp.dest(`components/${packageName}`));

});