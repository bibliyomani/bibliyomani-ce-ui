const rspack = require('@rspack/core');
const path = require('path');
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlRspackPlugin = require('@rspack/plugin-html');
const NodePolyfill = require('@rspack/plugin-node-polyfill');
const { DotenvPlugin } = require('rspack-plugin-dotenv');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const minifyPlugin = require('@rspack/plugin-minify');

const dotenv = require('dotenv');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** @type {import('@rspack/cli').Configuration} */

module.exports = (env, argv) => {
  const isDev = process.env.NODE_ENV === 'development';

  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env.development';
  const fileEnv = dotenv.config({ path: basePath }).parsed;

  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    context: __dirname,
    mode: isDev ? 'development' : 'production',
    entry: {
      main: path.resolve(__dirname, 'src/index.tsx'),
    },

    devtool: !isDev ? 'source-map' : 'eval',
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new minifyPlugin({
    //       minifier: 'terser',
    //     }),
    //   ],
    // },

    // output: {
    //   path: path.resolve(__dirname, 'dist/'),
    //   filename: '[name].js',
    // },
    resolve: {
      tsConfigPath: path.resolve(__dirname, 'tsconfig.json'),

      alias: {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat', // Must be below test-utils
        'react/jsx-runtime': 'preact/jsx-runtime',
        root: path.resolve(__dirname, 'src/'),
        i18n: path.resolve(__dirname, 'src/i18n'),
        components: path.resolve(__dirname, 'src/components'),
        enum: path.resolve(__dirname, '/src/enum'),
        navbar: path.resolve(__dirname, '/src/navbar'),
        utils: path.resolve(__dirname, '/src/utils'),
        pages: path.resolve(__dirname, 'src/pages'),
        types: path.resolve(__dirname, 'src/types'),
        router: path.resolve(__dirname, 'src/router'),
        services: path.resolve(__dirname, 'src/services'),
        landing: path.resolve(__dirname, 'src/landing'),
        home: path.resolve(__dirname, 'src/home'),
        constants: path.resolve(__dirname, 'src/constants'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        book: path.resolve(__dirname, 'src/book'),
      },
      extensions: ['...', '.js', '.jsx', '.ts', '.tsx'],
    },

    module: {
      rules: [
        {
          test: /.(j|t)s$/,
          exclude: [/[\/]node_modules[\/]/],
          loader: 'builtin:swc-loader',
          options: {
            sourceMap: true,
            jsc: {
              parser: { syntax: 'typescript' },
              externalHelpers: true,
              transform: {
                react: {
                  runtime: 'automatic',
                  development: isDev,
                  refresh: isDev,
                  throwIfNamespace: true,
                  useBuiltins: false,
                },
              },
            },
            env: { targets: 'Chrome >= 48' },
          },
        },

        {
          test: /.(j|t)sx$/,
          loader: 'builtin:swc-loader',
          exclude: [/[\/]node_modules[\/]/],
          options: {
            sourceMap: true,
            jsc: {
              parser: { syntax: 'typescript', tsx: true },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: isDev,
                  refresh: isDev,
                },
              },
              externalHelpers: true,
            },
            env: { targets: 'Chrome >= 48' },
          },
        },
        {
          test: /\.(png|jpg|jpeg|woff|woff2|ttf|mp3|svg)$/,
          type: 'asset/resource',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                  },
                },
              },
            },
          ],
          type: 'css',
        },
      ],
    },
    plugins: [
      new NodePolyfill(),
      isDev && new ReactRefreshPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        // favicon: './src/assets/favicon.png',
      }),
      new rspack.DefinePlugin(envKeys),
    ].filter(Boolean),

    devServer: {
      port: 3200,
      historyApiFallback: { index: '/', disableDotRule: true },
      open: true,
      hot: true,
    },
  };
};
