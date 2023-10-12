const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={

    mode:'development',
    entry:"./src/index.ts",
    //输出结果,打包的文件位置
    output:{
        //获取当面文件所在的目录
        path: path.resolve(__dirname,"./dist"),
        //目录下文件的名称
        filename:'bundle.js'
    },
    resolve:{
        extensions:[".ts",".js",".cjs",".json"]
    },
    devServer:{},
    module:{
        rules:[
            {
                test:/\.ts$/,
                loader:'ts-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]

}