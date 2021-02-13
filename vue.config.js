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
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
}