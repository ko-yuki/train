const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");

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
                inject:true,
                title:"GitHub热门项目",
                filename:"index.html",
                template:"./public/index.html",
                hash:true,
                favicon:"./public/favicon.ico"
            }),
            new ESLintPlugin()
        ],
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
                    loader:"style-loader!css-loader!postcss-loader"
                    
                },
                {
                    test:/\.css$/,
                    exclude:[path.resolve(__dirname,'src/assets'),/node_modules/],
                    loader:"style-loader!css-loader?modules!postcss-loader"
                },
                {
                    test:/\.less$/,
                    include:[path.resolve(__dirname,'src/assets'),/node_modules/],
                    loader:"style-loader!css-loader!postcss-loader!less-loader"
                },
                {
                    test:/\.less$/,
                    exclude:[path.resolve(__dirname,'src/assets'),/node_modules/],
                    loader:"style-loader!css-loader?modules!postcss-loader!less-loader"
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
        devServer:{
            contentBase:"./dist",
            hot:true,
            hotOnly:true,
            inline:true
        },
        output:{
            filename:"bundle.js",
            path:path.resolve(__dirname,"dist")
        }
    }
}