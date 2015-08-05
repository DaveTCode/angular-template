module.exports = {
  build_dir: 'build',
  compile_dir: 'bin',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  vendor_files: {
    js: [
      'vendor/angular/angular.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-sanitize/angular-sanitize.min.js',
      'vendor/angular-animate/angular-animate.min.js',
      'vendor/angular-cookies/angular-cookies.min.js'
    ],
    css: [
    ],
    assets: [
      'vendor/bootstrap/fonts/glyphicons-halflings-regular.eot',
      'vendor/bootstrap/fonts/glyphicons-halflings-regular.svg',
      'vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf',
      'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
      'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2'
    ]
  },
};
