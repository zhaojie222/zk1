/**
 * Created by lenovo on 2017/10/9.
 */
var gulp = require("gulp"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify");

gulp.task("js",function(){
    gulp.src("./*.js")
        .pipe(concat("ok.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("./js/"))
})