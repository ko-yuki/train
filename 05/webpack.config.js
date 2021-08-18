const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = function(env,argv){
    const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
    const isEnvProduction = argv.mode === 'production';
    return {
        mode:isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        entry:"./src/index.js",
        resolve:{
            extensions:[".js",".json",".css"],
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
            })
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
                    loader:"style-loader!css-loader"
                    
                },
                {
                    test:/\.(png|svg|jpg|gif)$/,
                    loader:"file-loader"
                },
                {
                    test:/\.(woff|woff2|eot|ttf|otf)$/,
                    loader:"file-loader"
                }
            ]
        },
        devServer:{
            contentBase:"./dist",
            inline:true,
        },
        output:{
            filename:"bundle.js",
            path:path.resolve(__dirname,"dist")
        }
    }
}