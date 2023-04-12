/*
 * @Author: yaohengfeng 1921934563@qq.com
 * @Date: 2023-03-29 16:19:19
 * @LastEditors: yaohengfeng 1921934563@qq.com
 * @LastEditTime: 2023-04-12 18:20:27
 * @FilePath: \img-base64-lcd\img2bin.js
 * @Description: img2bin.js
 */
const img2lcd = require('./lib/img2lcd')
const fs = require('fs');

const DIC_DIG = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
    'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15,
    'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
}


/**
 * 将字符串转换为16进制数字
 * @param {*} str 
 * @returns 
 */
function convertToHexInt(str) {
    var value = 0;
    var length = str.length;
    for (let i = 0; i < length; i++) {
        value = value * 16 + DIC_DIG[str[i]];
    }
    return value;
}

/**
 * 生成二进制文件 
 * @param {*} data 
 */
function generateToB(data, output) {
    let barr = ['='];
    for (let value of data) {
        barr.push(convertToHexInt(value.substring(2,value.length)));
    }
    fs.writeFileSync(output, Buffer.from(barr));
}

/**
 * 
 * @param {*} src 源文件
 * @param {*} output 生成文件
 * @returns 
 */
function generateLCDBinByURL(src, output){
    return new Promise((resolve, reject) => {
        img2lcd.convert(src, function (err, hex) {
            if (!err) {
                var dataList = hex.split(",");
                generateToB(dataList, output);
                resolve(output);
            }else{
                reject(err);
            }
        })
    })
}

module.exports = {
    generateLCDBinByURL
};