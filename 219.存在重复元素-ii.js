/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++)
        for (let j = i+1; j <=Math.min(nums.length-1,i+k);j++) {
            if(nums[i]==nums[j])
                return true;
        }
        return false;
};

