/* eslint-disable */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  cssLoaderOptions: {
    esModule: false,
    sourceMap: false,
  },
  //
  // Other Config Here...

  webpack(config) {
    return config;
  },
});
