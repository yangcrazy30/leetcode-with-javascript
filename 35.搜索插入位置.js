/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = -1;
    let start = 0;
    let end = nums.length -1;
    while(index == -1){
        let mid = parseInt((start+end)/2);
        if(target==nums[mid]){
            index = mid;
        }
        else if(target < nums[mid]){
            if(mid==0||target>nums[mid-1]){
                index=mid;
            }
            end=mid-1;
        }
        else if(target>nums[mid]){
            if(mid==nums.length-1||target<nums[mid+1]){
                index=mid+1;
            }
            start=mid+1;
        }
    }
    return index;
};

