var gulp = require('gulp')

var source_path = __dirname + '/dist/this-weeks-finds.html'
var dist_path = __dirname + '/dist/index.html'

console.log(source_path, dist_path)

gulp.task('copy', () => {
  require('child_process').exec('cp ' + source_path + ' ' + dist_path)
})
gulp.task('watch', () => {
  gulp.watch(source_path, ['copy'])
})
