const gulp = require('gulp');
const replace = require('gulp-replace');
const ugligy = require('gulp-uglify');
const ts = require('gulp-typescript');
const fs = require('fs');

const tsProject = ts.createProject('./tsconfig.json');

gulp.task('ts', function () {
    // console.log(tsProject)
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('src/js'));
});

gulp.task('worker', ['ts'], function () {
    const workerFile = fs.readFileSync('./src/js/worker.js', 'utf8');
    return gulp.src('./src/js/worker.js')
        .pipe(createWorkerBlob(workerFile));
    //   .pipe(gulp.dest(''))
});

gulp.task('replace', ['ts'], function () {
    gulp.src('./src/js/practice.js')
        .pipe(replace(/(this\.WORKER)/g, './worker.ts'))
        .pipe(gulp.dest('./src/js/practice.js'));
});

gulp.task('default', ['ts']);