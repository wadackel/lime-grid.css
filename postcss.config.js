const plugins = [
  // required
  require('postcss-import')(),
  require('postcss-custom-properties')(),
  require('postcss-calc')(),
  require('postcss-custom-media')(),

  // optional
  require('postcss-flexbugs-fixes')(),
  require('autoprefixer')({
    browsers: [
      'last 2 versions',
      'ie 11',
    ],
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano')({
    autoprefixer: false,
  }));
}

module.exports = {
  plugins,
};
