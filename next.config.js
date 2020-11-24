/* eslint-disable */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  // cssLoaderOptionsModules: {},
  //
  // Other Config Here...

  webpack(config) {
    return config;
  },
});
