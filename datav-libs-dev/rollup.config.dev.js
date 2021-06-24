const path = require('path')
const resolve = require("rollup-plugin-node-resolve")
const commonjs = require("rollup-plugin-commonjs")

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/datv.libs.js')
const outputEsPath = path.resolve(__dirname, './dist/datv.libs.es.js')

module.exports = {
    input: inputPath,  // 输入路径
    output: [
        {
            file: outputUmdPath,  // 输出路径
            format:'umd',  //输出的模块协议
            name:"DatavLibsA"  // 名字
        },
        {
            file: outputEsPath,  // 输出路径
            format:'es',  //输出的模块协议
            name:"DatavLibsB"  // 名字
        }
    ],
    plugins:[
        resolve(),
        commonjs()
    ],
    external:[
        'sam-test-data'
    ]
}