const path = require('path');

module.exports = {
    entry: './src/ts/index.ts',
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.worker\.ts$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        inline: true,
                        fallback: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gif.exporter.js'
    }

};