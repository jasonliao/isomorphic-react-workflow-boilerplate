import webpack from 'webpack';

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/client.js'
  ],
  output: {
    path: __dirname + '/public/static/',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
    }, { 
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    }, { 
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  }
};

export default config;
