module.exports = function(grunt) {
    require('jit-grunt')(grunt);
   
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "css/style.css": "less/style.less"
          }
        }
      },
      watch: {
        styles: {
          files: ['less/**/*.less'],
          tasks: ['less']
        }
      }
    });
   
    grunt.registerTask('default', ['less', 'watch']);
  };