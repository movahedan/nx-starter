/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');

const rootMain = require('../../../.storybook/main');
const { version } = require('../package.json');

process.env.STORYBOOK_VERSION = version;

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  staticDirs: ['../public'],
  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    ...rootMain.addons,
    '@nrwl/react/plugins/storybook',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
  ],
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    ];

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(mjs|tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@nrwl/react/babel',
                {
                  runtime: 'classic',
                },
              ],
            ],
          },
        },
      },
    ];

    return config;
  },
};
