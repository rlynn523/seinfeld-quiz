var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
	// The entry property is the entry point of your javascript
	// This is the starting point which webpack will use to start its search for dependencies within your code. 
	// This is set to refelect what is set as the "main" propertuy in your package.json file
    entry: path.resolve(__dirname, packageData.main),
    // The output property controls where the bundled JavaScript file is saved.
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.'),
    },
    // Tells webpack that you want a source map building for your output file.
    devtool: 'source-map',
     module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
}