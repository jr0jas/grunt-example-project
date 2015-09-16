module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    less: {
      development: {
        options: {
          paths: ["src/css/"]
        },
        files: {
          "src/css/result.css": "src/less/source.less"
        }
      },
      production: {
        options: {
          paths: ["src/css/"],
          plugins: [],
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
            bgColor: 'red'
          }
        },
        files: {
          "src/css/result.css": "src/less/source.less"
        }
      }
    }
  });



  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  //grunt.registerTask('default', ['uglify','jshint','nodeunit','uglify','less','cssmin','htmlhint','watch']);
   grunt.registerTask('default', ['less']);
  

};