module.exports = {
  plugins: [
    require('stylelint')(),
    require('postcss-preset-env')({ stage: 1 }),
  ],
};
