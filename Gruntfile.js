/*
 * grunt-contrib-sass
 * http://gruntjs.com/
 *
 * Copyright (c) 2015 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },
    clean: {
      test: ['tmp']
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
	removeCommentsFromCDATA: true
      },
      compile: {
       files: [
        {
          expand: true,     // Enable dynamic expansion.
          cwd: '_site/',      // Src matches are relative to this path.
          src: ['**/*.html'], // Actual pattern(s) to match.
          dest: '_site/',   // Destination path prefix.
        },
        {
          expand: true,     // Enable dynamic expansion.
          cwd: '_site/',      // Src matches are relative to this path.
          src: ['**/*.css'], // Actual pattern(s) to match.
          dest: '_site/',   // Destination path prefix.
        },
      ],
      },
    },
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  grunt.registerTask('test', ['jshint', 'clean', 'htmlmin', 'nodeunit']);
  grunt.registerTask('default', ['test', 'build-contrib']);
};
