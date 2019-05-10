/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count =0;
    for(let i =0;i<nums.length;i++) {
        if(nums[i] ==0) {
            count ++;
        }else {
            if(count !=0) {
                let temp  = nums[i];
                nums[i] = nums[i-count];
                nums[i-count] = temp;
            }
        }
        
    }
};
