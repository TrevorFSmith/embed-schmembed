module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    run: {
      options: {
        // ...
      },
      formulate_wel: {
        cmd: 'npm',
        args: [ 'run-script', 'formulate-wel' ]
      },
      run_wel: {
        cmd: 'npm',
        args: [ 'run-script', 'run-wel' ]
      }
    }
  });
  grunt.registerTask('default', [ 'run:run_wel' ]);
};