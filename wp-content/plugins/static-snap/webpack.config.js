/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const defaults = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
  ...defaults,
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  entry: {
    dashboard: ['./src/dashboard/app/src/index.tsx'],
    forms: ['./src/forms/app/src/start.ts'],
    frontend: ['./src/frontend/app/src/start.ts'],
    algolia: ['./src/extensions/search/algolia/app/src/start.ts'],
  },

  externals: {
    '@wordpress/i18n': ['window wp', 'i18n'],
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  /* module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
    ...defaults.module,
  }, */
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/js'),
  },
  resolve: {
    alias: {
      '@staticsnap/dashboard': path.resolve(__dirname, 'src/dashboard/app/src'),
      '@staticsnap/frontend': path.resolve(__dirname, 'src/frontend/app/src'),
      '@staticsnap/algolia': path.resolve(__dirname, 'src/extensions/search/algolia/app/src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
};
