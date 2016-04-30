module.exports = {
  build_dir: 'build',
  compile_dir: 'bin',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    sass: 'src/sass/main.scss'
  },

  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  vendor_files: {
    js: [
    ],
    css: [
    ],
    assets: [
      'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot',
      'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg',
      'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf',
      'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff',
      'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2'
    ]
  },
};
