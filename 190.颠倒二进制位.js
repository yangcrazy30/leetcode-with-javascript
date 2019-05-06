/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var dd=n.toString(2);
    var mm=dd.split("");
    while(mm.length<32){mm.unshift(0);}
    mm.reverse();
    var zz=mm.join("");
    return parseInt(zz,2);
};

