const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    mode: 'production',
    devServer: {
        static: path.resolve(__dirname, 'src'),
        hot: true,
        port: 3300
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'  // було 'sass.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: 'assets',
                    noErrorOnMissing: true
                }
            ]
        })
    ]
};
// npm install --save-dev @babel/core@7.23.0 @babel/preset-env@7.23.3 autoprefixer copy-webpack-plugin css-loader eslint globals html-webpack-plugin mini-css-extract-plugin postcss-loader sass sass-loader style-loader webpack webpack-cli webpack-dev-server