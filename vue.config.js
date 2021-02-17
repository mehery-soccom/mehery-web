//const path = require("path");

module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    filenameHashing: false,
  	configureWebpack: {
  		output: {
  	   		filename: 'app.js'
  		}
  	},
	 devServer: {
        proxy: 'http://localhost:8080/',
        public: 'http://localhost:8080/',
        disableHostCheck: true,
        //historyApiFallback: false,
        // historyApiFallback: {
        //   rewrites: [
        //     { from: /\/admin/, to: '/admin-index.html' },
        //     { from: /\/agent/, to: '/agent-index.html' }
        //   ]
        // },
        // writeToDisk: true,
        // after: devServer => {
        //   // if devServer hasn't responded to the request, we can assume no matches
        //   devServer.use((req, res, next) => {
        //     const notFoundPage = path.resolve(__dirname, "./dist/404/index.html");
        //     res.status(404).sendFile(notFoundPage);
        //   });
        // },
    },



    // pages: {
    //   'admin': {
    //     entry: './src/owa-admin/main.js',
    //     template: 'public/admin-index.html',
    //     filename: 'admin-index.html',
    //     title: 'Admin',
    //     //chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    //   },
    //   'agent': {
    //     entry: './src/owa-agent/main.js',
    //     template: 'public/agent-index.html',
    //     filename: 'agent-index.html',
    //     title: 'Agent',
    //     //chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    //   }
    // },

    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
}