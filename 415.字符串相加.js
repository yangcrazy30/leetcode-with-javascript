/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (44.79%)
 * Likes:    68
 * Dislikes: 0
 * Total Accepted:    7.3K
 * Total Submissions: 16.3K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 注意：
 * 
 * 
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let c = 0, str = "";
    for(let i=num1.length - 1, j=num2.length - 1; i >= 0 || j >= 0; --i, --j) {
        let a = 0, b = 0;
        if(i >= 0) a = num1[i] | 0;
        if(j >= 0) b = num2[j] | 0;
        let n = a + b + c;
        str = n % 10 + str;
        c = (n / 10) | 0;
    }
    return c > 0? c + str: str;
};

