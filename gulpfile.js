var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
var uglify = require('gulp-uglify');

gulp.task('bundle', function() {
  return gulpWebpack(webpackConfig, webpack)
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  webpackConfig.watch = true;
  return gulpWebpack(webpackConfig, webpack)
    .pipe(gulp.dest('build'));
});
