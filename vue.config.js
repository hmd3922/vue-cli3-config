const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE.ENV === '' ? '' : ''

module.exports = {
    lintOnSave: false,
    publicPath: BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    // 不生成.map文件
    productionSourceMap: false,
    devServer: {
        proxy: ''
    }


}