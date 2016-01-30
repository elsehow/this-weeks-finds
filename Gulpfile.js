var gulp = require('gulp')

var source_path = 'dist/this-weeks-finds.html'
var dist_path = 'dist/index.html'

console.log(source_path, dist_path)

gulp.task('copy', () => {
  var cmd = 'cp ' + source_path + ' ' + dist_path
  require('child_process').exec(cmd, (err, res) => {
  console.log(cmd)
  console.warn(err)
  console.warn(res)
  })
})
gulp.task('watch', () => {
  gulp.watch(source_path, ['copy'])
})
