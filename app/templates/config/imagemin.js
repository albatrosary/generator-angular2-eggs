(function() {
  'use strict';

  module.exports = {
    dist: {
      files: [{
        expand: true,
        cwd: '<%%= paths.app %>/images',
        src: '{,*/}*.{gif,jpeg,jpg,png}',
        dest: '<%%= paths.dist %>/images'
      }]
    }
  };
})();
