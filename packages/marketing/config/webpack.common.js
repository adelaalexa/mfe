module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}

// rules -> test
// whenever we import in a file that ends with an extension of 
// mjs or js we want it to be processed by babel
// exclude all node modules files -> so don't run babel on them

// '@babel/preset-react' -> means babel will process all JSX tags in our app
// any react-related code
// '@babel/preset-env' -> transforms code in a variety of ways to ES5
// @babel/plugin-transform-runtime' -> add some additional features for our code
// in the browser -> ex: async await syntax