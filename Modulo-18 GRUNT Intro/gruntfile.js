module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development'],
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement:'./styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement:'../src/scripts/main.js'
                        },
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement:'./styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement:'./scripts/main.min.js'
                        },
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                },
            }
        }

    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);

}
// -- Isso aqui fica dentro do Grunt.initConfig --
// Usado Na aula para Explicar como compilar o sass 
// e como fazer as tarefas se iniciarem paralelamente com o Grunt !!!!

// sass: {
//     dist: {
//         options: {
//             style: 'compressed'
//         },
//         files: {
//             'main2.css': 'main.scss'
//         }
//     }
// },
// concurrent: {
//     target: ['olaGrunt','less','sass','tarefaDemorada']
// }
// -- Vem até aqui --

// Tasks de Exemplo usadas na aula !!!!
//

// grunt.registerTask('olaGrunt', function() {
//     const done = this.async();
//     setTimeout(function() {
//         console.log('Olá Grunt');
//         done();
//     }, 3000)

// })

// grunt.registerTask('tarefaDemorada', function() {
//     const done = this.async();
//     setTimeout(function() {
//         console.log('Olá Grunt');
//         done();
//     }, 3000)

// })

// Parte de como importar os plugins e fazer upLoad para o projeto 
// E como fazer roda-los

// grunt.loadNpmTasks('grunt-contrib-less');
// grunt.loadNpmTasks('grunt-contrib-sass');
// grunt.loadNpmTasks('grunt-concurrent');

// grunt.registerTask('default', ['concurrent'])