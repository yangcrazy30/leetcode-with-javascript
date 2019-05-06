/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {


    var count = 0;
    while(n!=0){
        count = count + (n & 1);
        n = n>>>1;
    }
    return count;
};

