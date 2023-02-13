const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV === 'local';

const config = {
  mode: process.env.NODE_ENV,
  entry: './src/index.tsx',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
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
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
      {
        test: /\.(png|jpg|jpeg|woff|woff2|ttf|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
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

module.exports = config;