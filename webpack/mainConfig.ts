import * as path from 'path';
import * as webpack from 'webpack';

export const getMainConfig = (rootDir, env = 'production') => ({
  externals: {},

  module: {
    rules: [{
      test: /\.ts$/,
      enforce: 'pre',
      loader: 'tslint-loader',
    }, {
      test: /\.tsx?$/,
			use: [
				{
					loader: 'ts-loader',
				}
			],
    }, {
      test: /\.ts/,
      use: 'source-map-loader',
      enforce: 'pre',
    }],
  },

  resolve: {
    modules: ['node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.ts', '.tsx'],
    alias: {},
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(env),
      }
    }),
		new webpack.HotModuleReplacementPlugin(),
  ],

//	optimization: {
//		splitChunks: {
//			chunks: 'all',
//		},
//	},

  node: {
    fs: 'empty',
  },

  devtool: 'source-map',
	mode: env,
});
