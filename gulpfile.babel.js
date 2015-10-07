import babel from 'gulp-babel'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import watch from 'gulp-watch'

gulp.task('compile', () => {
  gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('lib/'));
});

gulp.task('watch', () => {
  gulp.run('compile');
  gulp.watch('src/**/*.js', ['compile']);
});
