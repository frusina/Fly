var path = require('path');

var config = {
   entry:  './main.js',
	
   output: {
      
	  path:  "./client/",
      filename: 'index.js',
	  publicPath: '/'
   },
	
   devServer: {
      inline: true,
      port: 8080,
	  contentBase: "./client",
	  hot: true
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
			
            query: {
               presets: ['es2015', 'react']
            }
         }
      ],
	  include: [
		path.resolve(__dirname,"src/components")
		
		]
   }
}

module.exports = config;