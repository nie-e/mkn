// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  return {
    presets: [['next/babel']],
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          style: true,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
          },
        },
      ],
    ],
    ignore: [
      'node_modules',
      'logs',
      //
      '.cache',
      '_cache',
      'cache',
      //
      '.build',
      '_build',
      'build',
      //
      '.dist',
      '_dist',
      'dist',
      //
      '.deploy',
      '_deploy',
      'deploy',
    ],
  };
};
