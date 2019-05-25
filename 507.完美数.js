/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 *
 * https://leetcode-cn.com/problems/perfect-number/description/
 *
 * algorithms
 * Easy (34.23%)
 * Likes:    29
 * Dislikes: 0
 * Total Accepted:    5K
 * Total Submissions: 14.4K
 * Testcase Example:  '28'
 *
 * 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
 * 
 * 给定一个 正整数 n， 如果他是完美数，返回 True，否则返回 False
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入: 28
 * 输出: True
 * 解释: 28 = 1 + 2 + 4 + 7 + 14
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 输入的数字 n 不会超过 100,000,000. (1e8)
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num < 1) return false;
    var n = num;
    var res = 0;
    for(var i=1;i<=n/2;i++){
        if(n%i===0){
            res += i;
        }
    }
    return res === num
};

