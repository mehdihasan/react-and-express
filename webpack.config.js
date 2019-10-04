const path = require("path");

// configuration webpack will going to check
module.exports = {
    mode: "development", // or production
    entry: path.resolve(__dirname, 'src', 'app'), // is the firdt file of our app
    output: { // what our application is going to become 
        path: path.resolve(__diranme, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    }
}