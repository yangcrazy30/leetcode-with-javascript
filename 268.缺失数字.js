/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let res = nums.length;
    for (let i = 0; i < nums.length; ++i){
        res ^= nums[i];
        res ^= i;
    }
    return res;  
};
