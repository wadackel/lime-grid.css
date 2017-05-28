module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-custom-properties')(),
    require('postcss-calc')(),
    require('postcss-custom-media')(),
    require('postcss-nesting')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')({
      browsers: [
        'last 2 versions',
        'ie 11',
      ],
    }),
    require('cssnano')({
      autoprefixer: false,
    }),
  ],
};
