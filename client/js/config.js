(function() {
  System.config({
    baseURL: '/js',
    packages: {
      'jquery': {
        main: '../../bower_components/jquery/dist/jquery.js',
      },
      'js-bst': {
        main: '../../bower_components/aureooms-js-bst/js/dist/bst.js'
      }
    }
  });

  System.import('main.js');
})();