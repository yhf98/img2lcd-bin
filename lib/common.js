const fs = require("fs")
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


module.exports = {
    generateToB
};