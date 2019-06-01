/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (29.95%)
 * Likes:    56
 * Dislikes: 0
 * Total Accepted:    5.8K
 * Total Submissions: 18.9K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。
 * 
 * 示例1:
 * 
 * 
 * 输入: 5
 * 输出: True
 * 解释: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: 3
 * 输出: False
 * 
 * 
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let k=Math.floor(Math.sqrt(c));
    for(let i=0;i<=k;i++)
    {
        let diff=c-i*i;
        let k=Math.floor(Math.sqrt(diff));
        if(k*k==diff)
            return true;
    }
    return false;
};
