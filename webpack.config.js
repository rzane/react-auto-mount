var path = require('path');
var webpack = require('webpack');

function external (common, browser) {
  return {
    root: browser,
    amd: common,
    commonjs: common,
    commonjs2: common
  };
}

module.exports = {
  entry: {
    'react-auto-mount': path.join(__dirname, 'index.js'),
    'react-auto-mount.min': path.join(__dirname, 'index.js'),
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: 'reactAutoMount',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: {
    'react': external('react', 'React'),
    'react-dom': external('react-dom', 'ReactDOM')
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
