const path = require('path')
function resolve (dir) {
    return path.join(__dirname,dir)
}
module.exports = {
    configureWebpack: config => {
        config.resolve = {
            extensions: ['.js', '.vue', '.json',".css"],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                'fonts': resolve('src/fonts'),
                'api': resolve('src/api'),
                'common': resolve('src/common'),
                'components': resolve('src/components'),
                'views': resolve('src/views')
            }
        }
    }
}
