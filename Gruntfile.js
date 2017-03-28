/* https://gist.github.com/jshawl/6225945#file-gruntfile-js */
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'style.css': 'style.scss'
        }
      }
    },
    autoprefixer: {
      dist: {
        files: {
          'style.css': 'style.css'
        }
      }
    },
    watch: {
      css: {
        files: '*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.registerTask('default', ['watch'])
}