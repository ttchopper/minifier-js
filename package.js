Package.describe({
  name: 'revol:minifier-js',
  summary: "JavaScript minifier",
  version: "1.0.0"
});

Npm.depends({
  "source-map": "0.5.6",
  "uglify-es": "3.1.1",
});

Package.onUse(function (api) {
  api.use('babel-compiler@6.13.0');
  api.export(['meteorJsMinify']);
  api.addFiles(['minifier.js'], 'server');
});
