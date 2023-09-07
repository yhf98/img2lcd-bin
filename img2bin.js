/*
 * @Author: yaohengfneg 1921934563@qq.com
 * @Date: 2023-09-07 21:06:01
 * @LastEditors: yaohengfneg 1921934563@qq.com
 * @LastEditTime: 2023-09-08 00:02:48
 * @FilePath: \img2lcd-bin\img2bin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: yaohengfeng 1921934563@qq.com
 * @Date: 2023-03-29 16:19:19
 * @LastEditors: yaohengfneg 1921934563@qq.com
 * @LastEditTime: 2023-09-07 23:16:50
 * @FilePath: \img-base64-lcd\img2bin.js
 * @Description: img2bin.js
 */
const img2lcd = require('./lib/img2lcd')
const { generateToB } = require("./lib/common")

/**
 * 
 * @param {*} src 源文件
 * @param {*} output 生成文件
 * @returns 
 */
function generateLCDBinByURL(src, output) {
    return new Promise((resolve, reject) => {
        img2lcd.convert(src, function (err, hex) {
            if (!err) {
                var dataList = hex.split(",");
                console.info("dataList:", hex);
                generateToB(dataList, output);
                resolve(output);
            } else {
                reject(err);
            }
        })
    })
}

module.exports = {
    generateLCDBinByURL
};