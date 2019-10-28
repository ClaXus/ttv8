let jsonFile = '[{ "name": "Joliflor","upValue": 8, "rightValue": 6, "downValue": 3, "leftValue": 10, "lvl": 27, "link":"./Cards/Joliflor.png" }, { "name": "Azul", "upValue": 8, "rightValue": 10, "downValue": 6, "leftValue": 5, "lvl": 29, "link":"./Cards/Azul.png" }, { "name": "Barret", "upValue": 6, "rightValue": 1, "downValue": 9, "leftValue": 10, "lvl": 26, "link":"./Cards/Barret.png" }, { "name": "Bête Galienne", "upValue": 9, "rightValue": 9, "downValue": 1, "leftValue": 9, "lvl": 28, "link":"./Cards/Bête Galienne.png" }, { "name": "Cait Sith", "upValue": 3, "rightValue": 9, "downValue": 7, "leftValue": 10, "lvl": 29, "link":"./Cards/Cait Sith.png" }, { "name": "Chaos", "upValue": 5, "rightValue": 10, "downValue": 10, "leftValue": 4, "lvl": 29, "link":"./Cards/Chaos.png" } ]'


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
        appMain.run(jsonFile);
      });
  });
