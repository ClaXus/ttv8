let jsonFile = '[ { "idCard":0, "name": "Joliflor", "upValue": 8, "rightValue": 6, "downValue": 3, "leftValue": 10, "lvl": 27, "elem": 9, "link":"./Cards/Joliflor.png" }, { "idCard":1, "name": "Azul", "upValue": 8, "rightValue": 10, "downValue": 6, "leftValue": 5, "lvl": 29, "elem": 0, "link":"./Cards/Azul.png" }, { "idCard":2, "name": "Barret", "upValue": 6, "rightValue": 1, "downValue": 9, "leftValue": 10, "lvl": 26, "elem": 0, "link":"./Cards/Barret.png" }, { "idCard":3, "name": "Bête Galienne", "upValue": 9, "rightValue": 9, "downValue": 1, "leftValue": 9, "lvl": 28, "elem": 0, "link":"./Cards/Bête Galienne.png" }, { "idCard":4, "name": "Cait Sith", "upValue": 3, "rightValue": 9, "downValue": 7, "leftValue": 10, "lvl": 29, "elem": 0, "link":"./Cards/Cait Sith.png" }, { "idCard":5, "name": "Chaos", "upValue": 5, "rightValue": 10, "downValue": 10, "leftValue": 4, "lvl": 29, "link":"./Cards/Chaos.png" }, { "idCard":6, "name": "Chien de Deepground", "upValue": 4, "rightValue": 4, "downValue": 7, "leftValue": 4, "lvl": 19, "elem": 2, "link":"./Cards/Chien de Deepground.png" }, { "idCard":7, "name": "Cid", "upValue": 9, "rightValue": 10, "downValue": 3, "leftValue": 2, "lvl": 24, "elem": 0, "link":"./Cards/Cid.png" }, { "idCard":8, "name": "Clad", "upValue": 10, "rightValue": 9, "downValue": 5, "leftValue": 5, "elem": 0, "lvl": 29, "link":"./Cards/Clad.png" }, { "idCard":9, "name": "Coquatrice", "upValue": 3, "rightValue": 5, "downValue": 3, "leftValue": 7, "lvl": 18, "elem": 4, "link":"./Cards/Coquatrice.png" } ]'

// from http://removelinebreaks.net/ with cards.json

require.config({
    baseUrl: './',
    paths: {
        'jquery': 'jquery.min',
        'bootstrap': 'bootstrap.min',
        'url':'url.min',
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
        },
        url:{
          exports:'url'
        }
    }
  });

  require([
       'jquery'
      , 'bootstrap'
      , 'tt'
      ,'url'
      ],
      ($, bootstrap, tt, url) => {
      $(() => {
        var appMain = new tt.tt();
        appMain.run(jsonFile, $);
      });
  });
