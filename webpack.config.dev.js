const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');
const HappyPack = require('happypack');
const chalk = require('chalk');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const COMMON_0_CSS = new ExtractTextPlugin('common.0.css', {allChunks: true});
const COMMON_1_CSS = new ExtractTextPlugin('common.1.css', {allChunks: true});
const COMMON_0_LESS = new ExtractTextPlugin('app.0.css', {allChunks: true});
const COMMON_1_LESS = new ExtractTextPlugin('app.1.css', {allChunks: true});
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanOptions = {
	root : __dirname,
	exclude : 'a.js',
	verbose : true,
	dry : false
};
const pathsToClean = [
	'dist',
	'build'
];
//获取npm后面的命令
const commandTarget = process.env.npm_lifecycle_event;// npm run start:build 获取的是start:build
let SERVER_URL = '';
const dev = _.includes(_.toLower(commandTarget), 'dev');
const prod = _.includes(_.toLower(commandTarget), 'prod');
const test = _.includes(_.toLower(commandTarget), 'test');
if(dev) SERVER_URL = 'http://localhost:8081';// 开发环境
else if(prod) SERVER_URL = 'http://www.taobao.com';// 发布环境
else if(test) SERVER_URL = 'http://www.test.com';// 测试环境
else SERVER_URL = 'http://localhost:8081';// 本地环境环境

const happyThreadPoolLength = os.cpus().length;
const clean_plugin = new CleanWebpackPlugin(pathsToClean, cleanOptions);
const hot_plugin = new webpack.HotModuleReplacementPlugin();
const compressCode = new UglifyJSPlugin({
	sourceMap: dev ? true : false,
	cache: dev ? true : false
});

module.exports = (env, argv) => {
    console.log(argv);
    if(!argv) argv = {mode: 'production'};
	console.info(`${chalk.blue('npm_lifecycle_event: ', commandTarget)}`);
	console.info(`${chalk.blue('mode: ', argv.mode)}`);
	let configuration = {
		entry: [
			'babel-polyfill',
			'react-hot-loader/patch', //webpack的局部热更新 设置这里
			'./src/main.jsx',
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
					target: 'http://localhost:3001',
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
				use: COMMON_0_LESS.extract({
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
                                plugins: [
                                    new CleanCSSPlugin({ advanced: true })
                                ]
                            },
						}
					]
				})
            },
            // {
            //     test: /\.less$/,
            //     exclude: path.join(__dirname, 'node_modules'),
			// 	use: COMMON_1_LESS.extract({
			// 		fallback: 'style-loader',
			// 		use: [
			// 			{
			// 				loader: 'css-loader',
			// 				options: {
			// 					minimize: argv.mode == 'production',
            //                     sourceMap: argv.mode == 'development',
            //                     // modules: true,
            //                     // localIndentName: '[path][name]__[local]--[hash:base64:5]'
			// 				}
			// 			},
			// 			{
			// 				loader: 'less-loader',
			// 				options: {
			// 					javascriptEnabled: true,
            //                     sourceMap: argv.mode == 'development',
            //                     plugins: [
            //                         new CleanCSSPlugin({ advanced: true })
            //                     ]
            //                 },
			// 			}
			// 		]
			// 	})
			// },
			{
				test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: '1024',
							name: '[path][name].[ext]',
							outputPath: 'img/',
							publicPath: '/'
						}
					},
				]
			}
			],
		},
		node: {
			fs: 'empty'
		},
		resolve: {
            extensions: ['.js', '.jsx', '.less', '.json'],
            alias: {
                $component: path.resolve(__dirname, 'src/component'),
                $utils: path.resolve(__dirname, 'src/utils'),
                $router: path.resolve(__dirname, 'src/router'),
                $stores: path.resolve(__dirname, 'src/stores'),
                $config: path.resolve(__dirname, 'src/config'),
                $apis: path.resolve(__dirname, 'src/apis'),
            }
		},
		plugins: [
			COMMON_0_CSS,
			COMMON_1_CSS,
			COMMON_1_LESS,
			new HappyPack({
				//如何处理 用法和loader 的配置一样
				loaders: ['babel-loader'],
				threads: happyThreadPoolLength
			}),
			new webpack.DllReferencePlugin({
				context: __dirname,
				// name: '[name]_library',
				manifest: require('./dist/manifest.json'),
			}),
			new HtmlWebpackPlugin({
				title: '数据中心',
				template: path.resolve(__dirname, 'index.html'),
				hash: true,
				minify: true
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': argv.mode == 'development' ? JSON.stringify('development') : JSON.stringify('production'),
				'process.env.DEBUG': JSON.stringify(process.env.DEBUG) || JSON.stringify('debug'),
				'SERVER_URL': SERVER_URL,
			}),
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 5, // Must be greater than or equal to one
				minChunkSize: 1000
			}),
			// 打包moment.js的中文，防止local全部打包
			new webpack.ContextReplacementPlugin(/moment[/\\]locale$/,/zh-cn/),
			// new BundleAnalyzerPlugin({ analyzerPort: 8188 }),
			new webpack.NoEmitOnErrorsPlugin(), //允许js出错不中断服务
			// // 删除重复调用的模块，只保留一个
			// new webpack.optimize.DedupePlugin(),
			// 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
			new webpack.optimize.OccurrenceOrderPlugin()
		],
		devtool: argv.mode == 'development' ? 'inline-source-map' : false,
    };
	if(argv.mode == 'development' || _.includes(_.toLower(commandTarget), 'dev')) {
		// configuration.plugins.unshift(clean_plugin);
		_.concat(configuration.plugins, hot_plugin);
	} else _.concat(clean_plugin, configuration.plugins, compressCode);
	return configuration;
};
