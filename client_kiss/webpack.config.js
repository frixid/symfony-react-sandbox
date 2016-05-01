var pkg = require('./package.json');
module.exports = {
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    entry:
        './app.jsx',
    output: {
        path: './../web/assets/build',
        filename: pkg.name + '.js'
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel',
                query: { presets: ['es2015', 'stage-0', 'react'] }
                }
        ]
    }
};