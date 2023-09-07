/*
 * @Author: yaohengfeng 1921934563@qq.com
 * @Date: 2023-03-29 16:24:42
 * @LastEditors: yaohengfeng 1921934563@qq.com
 * @LastEditTime: 2023-04-12 18:12:00
 * @FilePath: \img-base64-lcd\test.js
 * @Description: test.js
 */
const bin = require('./test/img2bin.js')

let uname = './output/ttt.bin'

bin.generateLCDBinByURL('./img/1.jpg', uname)

console.info("生成文件：", uname)