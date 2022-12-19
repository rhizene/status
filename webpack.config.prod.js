const path = require('path');
const OUTPUT_FOLDER = path.resolve(__dirname, 'dist');


module.exports = {
    mode: 'production',
    entry: [
        './src/app.js',
        './src/app.scss',
        './src/index.html',
    ],
    output: {
        path: OUTPUT_FOLDER,
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[name][ext]',
        publicPath: "/status/",
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },
            {
                test: /\.scss$/i,
                type: 'asset/resource',
                exclude: /node_modules/,
                use: ['postcss-loader', 'sass-loader'],
                generator: {
                    filename: 'style.min.css'
                },
            },
            {
                test: /\.(svg|ttf|mp3)$/,
                type: 'asset/resource',
            }
        ]
    }
}
