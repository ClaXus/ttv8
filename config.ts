require.config({
    baseUrl: './',
    paths: {
        'jquery': 'jquery.min',
        'bootstrap': 'bootstrap.min',
        'tt': 'tt'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "bootstrap"
        },
        tt: {
            exports: "tt"
        }
    }
  });

  require([
       'jquery'
      , 'bootstrap'
      , 'tt'
      ],
      ($, bootstrap, tt) => {
      $(() => {
        var appMain = new tt.tt();
        appMain.run();
      });
  });
