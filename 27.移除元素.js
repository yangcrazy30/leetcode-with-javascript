/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]==val)
        {
            var temp=nums[0];
            nums[0]=nums[i];
            nums[i]=temp;
            nums.shift();
            i--;
        }
    }
    return nums.length;
};

var test=[0,1,2,2,3,0,4,2];
console.log(removeElement(test,2));
