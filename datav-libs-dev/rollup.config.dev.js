const path = require('path')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputPath = path.resolve(__dirname, './dist/datv.libs.js')

module.exports = {
    input: inputPath,  // 输入路径
    output: {
        file: outputPath,  // 输出路径
        format:'umd',  //输出的模块协议
        name:"DatavLibs"  // 名字
    }
}