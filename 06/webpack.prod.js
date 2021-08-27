const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function(env,argv){
    const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
    const isEnvProduction = argv.mode === 'production';
    return {
        mode:isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        entry:"./src/index.js",
        resolve:{
            extensions:[".js",".json",".css",".less"],
            alias:{
                "@":path.resolve(__dirname,'src')
            }
        },
        devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
        plugins:[
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title:"井字棋",
                filename:"index.html",
                template:"./public/index.html",
                hash:true,
                favicon:"./public/favicon.ico",
                minify:{
                    removeComments:true,
                    collapseWhitespace:true,
                    removeRedundantAttributes:true,
                    useShortDoctype:true,
                    removeEmptyAttributes:true,
                    removeStyleLinkTypeAttributes:true,
                    keepClosingSlash:true,
                    minifyJS:true,
                    minifyCSS:true,
                    minifyURLs:true
                }
            }),
            new ESLintPlugin(),
            new MiniCssExtractPlugin({
                filename:'[name].[contenthash:8].css',
                chunkFilename:'[name].[contenthash:8].chunk.css'
            }),
            new BundleAnalyzerPlugin()
        ],
        optimization:{
            minimize:true,
            minimizer:[
                new OptimizeCSSAssetsPlugin(),
            ],
            splitChunks:{
                chunks:'all',
                cacheGroups:{
                    defaultVendors:{
                        test:/[\\/]node_modules[\\/]/,
                        priority:-10,
                        reuseExistingChunk:true,
                        name:'vendor'
                    },
                    default:{
                        minChunks:2,
                        priority:-20,
                        reuseExistingChunk:true,
                        name:'bundle'
                    }
                }
            }
        },
        module:{
            rules:[
                {
                    test:/\.js$/,
                    exclude:/node_modules/,
                    loader:"babel-loader"
                },
                {
                    test:/\.css$/,
                    include:[path.resolve(__dirname,'src/assets'),/node_modules/],
                    loader:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader"]
                    
                },
                {
                    test:/\.css$/,
                    exclude:[path.resolve(__dirname,'src/assets'),/node_modules/],
                    loader:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader"]
                },
                {
                    test:/\.(png|svg|jpg|gif)$/,
                    loader:"file-loader"
                },
                {
                    test:/\.(woff|woff2|eot|ttf|otf)$/,
                    loader:"file-loader"
                },
            ]
        },
        output:{
            filename:"[name].[contenthash:8].js",
            path:path.resolve(__dirname,"dist"),
            publicPath:"/train/06/dist/"
        }
    }
}