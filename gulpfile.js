var gulp = require('gulp-param')(require('gulp'), process.argv);
var del = require('del');

gulp.task('prebuild', function(packageName) {
    console.log(`gulp prebuild packageName: ${packageName}`);

    del([
       'dist',
        'components',
        'build'
    ]).then(function () {
        // copy __adapters to components
        gulp.src([`client/__adapters/**`]).pipe(gulp.dest(`components/__adapters`));

        // copy component3-package1 to components (dev test)
        gulp.src([`node_modules/component3-package1/dist/**`])
            .pipe(gulp.dest(`components/component3-package1/`));
    });
});

gulp.task('postbuild', function(packageName) {

    console.log(`gulp postbuild packageName: ${packageName}`);
    // place code for your default task here

    gulp.src([`build/${packageName}/**`]).pipe(gulp.dest(`dist`));
});