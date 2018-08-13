const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HappyPack = require('happypack');
const chalk = require('chalk');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const COMMON_0_CSS = new ExtractTextPlugin('common.0.css', {allChunks: true});
const COMMON_1_CSS = new ExtractTextPlugin('common.1.css', {allChunks: true});
const COMMON_1_LESS = new ExtractTextPlugin('common.0.css', {allChunks: true});
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanOptions = {
	root    :       __dirname,
	exclude :       'a.js',
	verbose :       true,
	dry     :       false
};
const pathsToClean = [
	'dist',
	'build'
];
const happyThreadPoolLength = os.cpus().length;
const clean_plugin = new CleanWebpackPlugin(pathsToClean, cleanOptions);
const hot_plugin = new webpack.HotModuleReplacementPlugin();
const compressCode = new UglifyJSPlugin({});
//获取npm后面的命令
const commandTarget = process.env.npm_lifecycle_event;// npm run start:build 获取的是start:build
// webpack.config.js
module.exports = (env, argv) => {
	console.info(`${chalk.blue('npm_lifecycle_event: ', process.env.npm_lifecycle_event)}`);
	console.info(`${chalk.blue('mode: ', argv.mode)}`);
	let configuration = {
		entry: [
			'babel-polyfill',
			'react-hot-loader/patch', //webpack的局部热更新 设置这里
			'./src/main.js',
		],
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js',
			publicPath: '/',
		},
		devServer: {
			contentBase: path.resolve(__dirname, 'dist'),
			port: 8001,
			historyApiFallback: true,
			proxy: {
				'/v1': {
					target: 'http://192.168.53.6:8081',
					pathRewrite: {'^/v1' : '/v1'},
					changeOrigin: true,
				}
			}
		},
		module: {
			rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						plugins: ['react-hot-loader/babel'],
					}
				}],
			},
			{
				test: /\.css$/,
				include: path.join(__dirname, 'node_modules'),
				use: COMMON_0_CSS.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: argv.mode == 'production',
								sourceMap: argv.mode == 'development',
							}
						}
					]
				})
			},
			{
				test: /\.css$/,
				exclude: path.join(__dirname, 'node_modules'),
				use: COMMON_1_CSS.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: argv.mode == 'production',
								sourceMap: argv.mode == 'development',
							}
						},
					]
				})
			},
			{
				test: /\.less$/,
				use: COMMON_1_LESS.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: argv.mode == 'production',
								sourceMap: argv.mode == 'development',
							}
						},
						{
							loader: 'less-loader',
							options: {
								javascriptEnabled: true,
								sourceMap: argv.mode == 'development',
							}
						}
					]
				})
			},
			],
		},
		node: {
			fs: 'empty'
		},
		resolve: {
			extensions: ['.js', '.jsx', '.less', '.json']
		},
		plugins: [
			COMMON_0_CSS,
			COMMON_1_CSS,
			COMMON_1_LESS,
			// new BundleAnalyzerPlugin({ analyzerPort: 8188 }),
			new webpack.NoEmitOnErrorsPlugin(), //允许js出错不中断服务
			new HappyPack({
				//如何处理  用法和loader 的配置一样
				loaders: ['babel-loader'],
				threads: happyThreadPoolLength
			}),
			new webpack.DllReferencePlugin({
				context: __dirname,
				// name: '[name]_library',
				manifest:  require('./dist/manifest.json'),
			}),
			new HtmlWebpackPlugin({
				title: '数据中心',
				template: path.resolve(__dirname, 'index.html'),
				hash: true,
				minify: true
			}),
		],
		devtool: 'inline-source-map',
	};
	if(argv.mode == 'development' || _.includes(_.toLower(commandTarget), 'dev')) {
		// configuration.plugins.unshift(clean_plugin);
		_.concat(configuration.plugins, hot_plugin);
	} else  _.concat(clean_plugin, configuration.plugins, compressCode);
	return configuration;
};
