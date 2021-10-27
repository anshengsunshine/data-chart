const px2rem = require("postcss-px2rem")

const postcss = px2rem({
    remUnit: 32
})

module.exports = {
    publicPath: "./",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [postcss]
            }
        }
    }
}