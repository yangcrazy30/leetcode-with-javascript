/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 *
 * https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (31.64%)
 * Likes:    104
 * Dislikes: 0
 * Total Accepted:    4.6K
 * Total Submissions: 14.3K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 
 * 你找到的子数组应是最短的，请输出它的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [2, 6, 4, 8, 10, 9, 15]
 * 输出: 5
 * 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 * 
 * 
 * 说明 :
 * 
 * 
 * 输入的数组长度范围在 [1, 10,000]。
 * 输入的数组可能包含重复元素 ，所以升序的意思是<=。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var arr = [...nums].sort((a,b)=>a-b);
    var l = 0;
    var r = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] !== nums[i]){
            l = i;
            break;
        }
    }
    for(var j=nums.length-1;j>-1;j--){
        if(nums[j] !== arr[j]){
            r = j;
            break;
        }
    }
    if(l === 0 && r === 0){
        return 0;
    }
    return r - l + 1;
};

