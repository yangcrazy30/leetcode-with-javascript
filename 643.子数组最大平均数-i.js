/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 *
 * https://leetcode-cn.com/problems/maximum-average-subarray-i/description/
 *
 * algorithms
 * Easy (33.38%)
 * Likes:    49
 * Dislikes: 0
 * Total Accepted:    4.7K
 * Total Submissions: 13.8K
 * Testcase Example:  '[1,12,-5,-6,50,3]\n4'
 *
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 * 
 * 示例 1:
 * 
 * 输入: [1,12,-5,-6,50,3], k = 4
 * 输出: 12.75
 * 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 
 * 1 <= k <= n <= 30,000。
 * 所给数据范围 [-10,000，10,000]。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = nums.slice(0, k).reduce((x, y) => x + y, 0); // 整个最大和  初始化为前k个数最大和
    let currMaxSum = maxSum; // 以当前索引为结束的最大和
    for (let i = 0; i < nums.length - k; i++) {
        currMaxSum = currMaxSum + nums[i + k] - nums[i];// 减去第一个加上最后一个
        maxSum = Math.max(maxSum, currMaxSum);
    }
    return maxSum / k
};

