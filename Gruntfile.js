module.exports = function (grunt) {
    var npmDependencies = require('./package.json').devDependencies;

    grunt.initConfig({

        // Watches for changes and runs tasks
        watch: {
            sass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['css/**/*.css'],
                options: {
                    livereload: true
                }
            },
            php: {
                files: ['**/*.php'],
                options: {
                    livereload: true
                }
            }
        },

        clean: {
            pro: ["css"]
        },

        copy: { /*нужно переделать под нужды*/
            all: {
                expand: true,
                cwd: 'src/',
                src: ['**'],
                dest: 'build/'
            }
        },

        sass: {
            pro: {
                files: [
                    {
                        cwd: 'src/scss',
                        src: ['**/*.scss', '!**/_*.scss'],
                        dest: 'css',
                        ext: '.css',
                        expand: true
                    }
                ],
                options: {
                    style: 'compressed'
                }
            },
            dev: {
                files: [
                    {
                        cwd: 'src/scss',
                        src: ['**/*.scss', '!**/_*.scss'],
                        dest: 'css',
                        ext: '.css',
                        expand: true
                    }
                ],
                options: {
                    style: 'expanded'
                }
            }
        }

    });

    // Default task (for developer and watch): grunt
    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);

    // Build task (for production): grunt build
    grunt.registerTask('build', [
        'clean:pro',
        'sass:pro'
    ]);

    // Load up tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
};
