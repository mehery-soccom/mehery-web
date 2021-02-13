module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    filenameHashing: false,
	configureWebpack: {
		output: {
	   		filename: 'app.js'
		}
	},
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
}