/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 *
 * https://leetcode-cn.com/problems/nth-digit/description/
 *
 * algorithms
 * Easy (30.94%)
 * Likes:    57
 * Dislikes: 0
 * Total Accepted:    3.1K
 * Total Submissions: 9.8K
 * Testcase Example:  '3'
 *
 * 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。
 * 
 * 注意:
 * n 是正数且在32为整形范围内 ( n < 2^31)。
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * 3
 * 
 * 输出:
 * 3
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * 11
 * 
 * 输出:
 * 0
 * 
 * 说明:
 * 第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if (n < 10)
        return n;

    let length = 0, cnt = 9, i = 1;

    for (; length + cnt * i < n; i++) {
        length += cnt * i;
        cnt *= 10;
    }

    let num = Math.pow(10, i - 1) - 1 + parseInt((n - length + 1) / i);
    let index = (n - length - 1) % i;

    for (let k = 0; k < i - index - 1; k++) {
        num =parseInt(num/10);
    }
    return num % 10;
};