/*
 * grunt-bumtemp
 * blog.mattmcfarland.com
 *
 * Copyright (c) 2014 Matt McFarland
 * Licensed under the MIT license.
 *
 * Based on grunt-contrib-concat.
 */


'use strict';

module.exports = function(grunt) {

  // Internal lib.

  grunt.registerMultiTask('bumtemp', 'Backbone, Underscore, Marionette Template Engine wraps html files in script tags and concats them to one file.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      separator: grunt.util.linefeed,

    });


    // Iterate over all src-dest file pairs.
    this.files.forEach(function(f) {
      // Concat banner + specified files + footer.
      var src = '<!-- grunt-bumtemp generated file -->\n '+ f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        if (grunt.file.isDir(filepath)) {
          return;
        }
        // Read file source.
        var src = grunt.file.read(filepath);
        var filename = filepath.replace(/^.*[\\\/]/, '');
        var filen = filename.split('.',1)[0];
        var comment = '\n<!-- @grunt-bumtemp: Template from '+filen+ ' -->\n';
        var header = comment + '<script type="text/template" id="'+filen+'">\n\n';
        var footer = '\n</script>\n<!-- /#'+filen+'  :@grunt-bumtemp -->';

        // Process files as templates if requested.
        if (typeof options.process === 'function') {
          src = options.process(src, filepath);
        } else if (options.process) {
          src = grunt.template.process(src, options.process);
        }

        var srcd = header + src + footer;
        return srcd;
      }).join(options.separator);

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File ' + f.dest + ' created.');
    });
  });

};
