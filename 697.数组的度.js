/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 *
 * https://leetcode-cn.com/problems/degree-of-an-array/description/
 *
 * algorithms
 * Easy (45.73%)
 * Likes:    65
 * Dislikes: 0
 * Total Accepted:    4.2K
 * Total Submissions: 9K
 * Testcase Example:  '[1,2,2,3,1]'
 *
 * 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
 * 
 * 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1, 2, 2, 3, 1]
 * 输出: 2
 * 解释: 
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,2,2,3,1,4,2]
 * 输出: 6
 * 
 * 
 * 注意:
 * 
 * 
 * nums.length 在1到50,000区间范围内。
 * nums[i] 是一个在0到49,999范围内的整数。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    if(nums.length < 2) return nums.length;
    let obj = {};
    let max = { key: null, val: 0, len: 0 };
    for(let i=0,len=nums.length;i<len;i++) {
        if(obj[nums[i]]) {
            obj[nums[i]].push(i);
            let len = obj[nums[i]].length;
            if((len > max.val) || ((len == max.val) && (i - obj[nums[i]][0] + 1 < max.len))) {
                max = {
                    key: nums[i],
                    val: len,
                    len: i - obj[nums[i]][0] + 1
                };
            }
        } else {
            obj[nums[i]] = [i];
        }
    }
    if(max.key == null)return 1;
    return max.len;
};

