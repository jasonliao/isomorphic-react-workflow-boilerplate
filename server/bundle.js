import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from './../webpack.config.js';

const bundle = () => {

  let bundleStart = null;
  const comiler = webpack(webpackConfig);

  comiler.plugin('compile', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  comiler.plugin('done', () => {
    console.log(`Bundled in ${Date.now() - bundleStart} ms!`);
  });

  const bundler = new webpackDevServer(comiler, {
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  bundler.listen(8080, 'localhost', () => {
    console.log('Bundling project, please wait...');
  })

};

export default bundle;
