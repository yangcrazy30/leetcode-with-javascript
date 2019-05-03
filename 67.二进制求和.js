/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    //将计算位左对齐
    var [a2Arr, b2Arr] = [a.split("").reverse(), b.split("").reverse()];
    //定义进位 carry 
    var [lena, lenb, carry, result] = [a.length, b.length, 0, []];
    //取得较长数组进行遍历，以确保完全迭代
    var lenMax = Math.max(lena, lenb);
    for (var i = 0; i < lenMax; i++) {
        //每一项的值为两数组对应项数字和加上进位值
        //括号前面的加号代表类型转换，转换不了就置0
        var itemSum = +(a2Arr[i] || 0) + +(b2Arr[i] || 0) + carry;
        //根据每项值来定义结果位和进位
        if (itemSum == 0) {
            result[i] = 0;
            carry = 0;
        } else if (itemSum == 1) {
            result[i] = 1;
            carry = 0;
        } else if (itemSum == 2) {
            result[i] = 0;
            carry = 1;
        } else {
            result[i] = 1;
            carry = 1;
        }
    }
    //若最高位发生进位，插入1
    if (carry == 1) result.push(1);
    //反序并连接为字符串
    return result.reverse().join("");
}