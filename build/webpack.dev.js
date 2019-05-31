const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: {
        'awa-docs': './docs/src/index.js',
        'awa-mobile': './docs/src/mobile.js'
    },
    output: {
        path: path.join(__dirname, '../docs/dist'),
        publicPath: '/',
        chunkFilename: 'async_[name].js'
    },
    stats: {
        modules: false,
        children: false
    },
    serve: {
        open: true,
        host: '0.0.0.0',
        devMiddleware: {
            logLevel: 'warn'
        },
        hotClient: {
            logLevel: 'warn',
            allEntries: true
        }
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.vue', '.css'],
        alias: {
            packages: path.join(__dirname, '../packages')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            paths: [path.resolve(__dirname, 'node_modules')]
                        }
                    }
                ]
            },
            {
                test: /\.md$/,
                use: [
                    'vue-loader',
                    { // mark-down loader 不知道能不能使用
                        loader: "html-loader"
                    },
                    { // mark-down loader 不知道能不能使用
                        loader: "markdown-loader",
                        options: {
                            /* your options here */
                        }
                    }
                    //   '@vant/markdown-loader' //
                ]
            },
            {
                test: /\.(ttf|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['awa-docs'],
            template: 'docs/src/index.tpl',
            filename: 'index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            chunks: ['awa-mobile'],
            template: 'docs/src/index.tpl',
            filename: 'mobile.html',
            inject: true
        })
    ]
};
