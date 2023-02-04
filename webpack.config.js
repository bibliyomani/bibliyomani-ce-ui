const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV === 'local';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[fullhash].js',
  },

  resolve: {
    alias: {
      root: path.resolve(__dirname, 'src/'),
      i18n: path.resolve(__dirname, 'src/i18n'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      types: path.resolve(__dirname, 'src/types'),
      router: path.resolve(__dirname, 'src/router'),
      services: path.resolve(__dirname, 'src/services'),
      landing: path.resolve(__dirname, 'src/landing'),
      home: path.resolve(__dirname, 'src/home'),
      constants: path.resolve(__dirname, 'src/constants'),
      hooks: path.resolve(__dirname, 'src/hooks'),
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|woff|woff2|ttf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  loose: false,
                  shippedProposals: true,
                },
              ],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              [
                '@babel/plugin-proposal-private-property-in-object',
                {
                  loose: false,
                },
              ],
              [
                '@babel/plugin-proposal-class-properties',
                {
                  loose: false,
                },
              ],
              [
                '@babel/plugin-proposal-private-methods',
                {
                  loose: false,
                },
              ],
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
      { test: /\.json$/, type: 'json' },
    ],
  },

  plugins: [
    new Dotenv({
      path: `./.env.${process.env.NODE_ENV}`,
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ].filter(Boolean),

  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: { index: '/', disableDotRule: true },
    open: true,
    hot: true,
  },
};
