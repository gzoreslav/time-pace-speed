'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify', {
                            "presets": ["es2015"]
                        }]
                    ]
                },
                files: {
                    './examples/build.js': ['./examples/examples.js']
                }
            }
        },
        eslint: {
            target: [
                'src/**/*.js',
                'examples/**/*.js'
            ]
        },
    });


    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('example', ['browserify']);
    grunt.registerTask('inspect', ['eslint']);
};