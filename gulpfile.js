'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require( 'gulp-load-plugins' )(),
  browserSync: require( 'browser-sync' ),
  onError: function(err) {
    $.gp.notify.onError({
      title:    "Gulp",
      subtitle: "Failure!",
      message:  "Error: <%= error.message %>",
      sound:    "Beep"
    })(err);

    this.emit('end');
  }
};

/*******************************
 * BrowserSync Task
 *******************************/
$.gulp.task( 'browserSync', function( cb ) {
  return $.browserSync( {
    server: {
      baseDir: './'
    },
    open: "local",
    browser: "chrome"
  }, cb );
});


/*******************************
 * Scripts Task
 *******************************/
$.gulp.task( 'scripts', function() {
  $.gulp.src('src/js/app.js')
      .pipe( $.gp.plumber({errorHandler: $.onError}) )
      .pipe( $.gp.browserify() )
      .pipe( $.gp.babel({
        presets: ['es2015']
      }) )
      .pipe( $.gulp.dest('./dist/js') );
} );


/*******************************
 * Watch Task
 *******************************/
$.gulp.task( 'watch', ['scripts'], function () {
  $.gulp.watch('./src/js/**/*.js', ['scripts', $.browserSync.reload]);
});


/*******************************
 * Default Task
 *******************************/
$.gulp.task( 'default', ['scripts', 'browserSync', 'watch'] );