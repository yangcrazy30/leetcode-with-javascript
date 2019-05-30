/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 *
 * https://leetcode-cn.com/problems/longest-harmonious-subsequence/description/
 *
 * algorithms
 * Easy (40.05%)
 * Likes:    44
 * Dislikes: 0
 * Total Accepted:    3.1K
 * Total Submissions: 7.6K
 * Testcase Example:  '[1,3,2,2,5,2,3,7]'
 *
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
 * 
 * 现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,2,2,5,2,3,7]
 * 输出: 5
 * 原因: 最长的和谐数组是：[3,2,2,2,3].
 * 
 * 
 * 说明: 输入的数组长度最大不超过20,000.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    // let numss=nums.sort((a,b)=>{return a-b;})
    // let sort=[...new Set(nums)].sort((a,b)=>{return a-b});
    // let max=-2;
    // for(let i=0;i<sort.length;i++){
    //     let temp=numss.lastIndexOf(sort[i]+1)-numss.indexOf(sort[i]);
    //     max=max>temp?max:temp;
    // }
    // if(max<0)return 0;
    // else return max+1;
    var map = new Map();
    for(var i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }else{
            map.set(nums[i], 1);
        }
    }
    var res = 0;
    var temp = 0;
    for(var j of map.keys()){
        if(map.has(j+1)){
            temp = map.get(j) + map.get(j+1);
        }
        res = Math.max(res, temp);
    }
    return res;
};

