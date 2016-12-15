/**
 * Created by lanou on 16/10/8.
 */
// 引入 require("引入的插件名称");
var jade = require("gulp-jade");
var sass = require("gulp-sass");
var gulp = require("gulp");
var watch = require("gulp-watch");


// 写任务 默认任务名 是较default
gulp.task("jade",function(){
    gulp.src("jade/*.jade")
    //  pipe管道
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest("html/"));
});

gulp.task("sass",function(){
    gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css/"))
});

gulp.task("watch",function(){
    gulp.watch("sass/*.scss",["sass"]);
    gulp.watch("jade/*.jade",["jade"]);
})