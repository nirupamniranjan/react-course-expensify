const path = require('path');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env)=>{
    const isProduction = env==='production'
    
    return{

    entry:'./src/app.js',
    output:{
    path:path.join(__dirname,'public'),
    filename:'bundle.js'
    },
    
    plugins:[
        new MiniCssExtractPlugin({filename:'styles.css'})
    ],
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.jsx?$/,
            exclude:/node_modules/,
            
            
        },
    {
        
        test:/\.s?css$/,
        use : [
            MiniCssExtractPlugin.loader,
            {loader:'css-loader',
             options:{
               sourceMap:   true
             }
            },
            {loader:
            'sass-loader',
            options:{
             sourceMap:true
            }
            }
        ]
    
    }]
    },

    devtool:isProduction?'source-map':'inline-source-map',
    devServer:{contentBase:path.join(__dirname,'public'),
    historyApiFallback: true
}
}
}