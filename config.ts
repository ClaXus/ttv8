declare var require: (deps: string[]) => void;

require.config({
  baseUrl: './',

  paths: {
    "jquery": './jquery.min',
    "bootstrap": './bootstrap.min'
  },

  shim: {
    "jquery": {
      exports: '$'
    },
    "bootstrap": {
    deps: ['jquery']
    }
  }
});

require(["tt"]);
