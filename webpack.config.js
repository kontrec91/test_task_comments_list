const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        form: './src/components/form/FormComponent.js',
        commentsList: './src/components/CommentsList.js',
        fetch: './src/components/fetch/fetch.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}