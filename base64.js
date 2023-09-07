/*
 * @Author: yaohengfneg 1921934563@qq.com
 * @Date: 2023-09-07 21:09:24
 * @LastEditors: yaohengfneg 1921934563@qq.com
 * @LastEditTime: 2023-09-07 21:09:34
 * @FilePath: \img2lcd-bin\base64.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE/img
 */
const fs = require('fs');

function imageToBase64(imagePath) {
  try {
    const image = fs.readFileSync(imagePath);
    const base64 = image.toString('base64');
    return base64;
  } catch (error) {
    console.error('Failed to convert image to Base64:', error);
    return null;
  }
}

fs.writeFileSync("./1.txt", imageToBase64("./img/1.jpg"));