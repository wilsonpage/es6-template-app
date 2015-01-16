
var to5 = require('gulp-6to5');
var gulp = require('gulp');


gulp.task('clone', function() {
  return gulp.src('app/**')
    .pipe(gulp.dest('dist/'));
});

gulp.task('to5', ['clone'], function() {
  return gulp.src('dist/**/*.js')
    .pipe(to5({ modules: 'umd' }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', function () {
  gulp.watch('app/**', ['default']);
});

gulp.task('default', ['clone', 'to5']);
