var path = require('path');
import baseConfig, { options } from './base.config';

let config = {
  ...baseConfig,

  entry: {
    'react-bootstrap': './src/index.js',
  },
  output: {
    path: './dist',
    filename: options.optimizeMinimize ? '[name].min.js' : '[name].js'
  },
  module:{
    loaders:[
      {
        test:/\.(js)?$/,
        exclude:/(node_modules)/,
        loader: 'babel',
        query:{

        }
      },
      {
        test:/\.(css)?$/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.(scss|sass)?$/,
        loader:'style-loader!css-loader!sass-loader'
      },
      {
        test:/\.(eot|woff(2)?|ttf|svg)?(@.+)*$/,
        exclude:/node_modules/,
        loader:'url-loader?limit=20480&name=dist/other/[name].[hash:8].[ext]'
      },
      {
        test:/\.(jpg|png|gif|jpeg)?$/,
        loader:'url-loader'
      }
    ]
  },
  resolve:{
    alias:{
      "bootstrap-sass":path.resolve(__dirname, '../../bootstrap-blue-theme/assets/stylesheets/')
    }
  },
  resolveLoader:{
    modules:[
        path.resolve(__dirname, '../node_modules')
    ]
  },
  externals: [
    {
      "react": "React",
      "react-dom": "ReactDOM",
      "jquery": "jQuery"
    }
  ],
};

if(options.optimizeMinimize) {
    config.output = Object.assign({
        library: 'ReactBootstrap',
        libraryTarget: 'umd'
    }, config.output);
}

export default config;
