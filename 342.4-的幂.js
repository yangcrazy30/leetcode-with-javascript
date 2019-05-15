/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num < 0 || num & (num-1)){//check(is or not) a power of 2.
        return false;
    }
    return num & 0x55555555;//or return num%3==1
};

