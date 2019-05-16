/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (47.11%)
 * Likes:    51
 * Dislikes: 0
 * Total Accepted:    5.5K
 * Total Submissions: 11.6K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 注意:
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1: 
 * 
 * 
 * 输入:
 * "abccccdd"
 * 
 * 输出:
 * 7
 * 
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let letters = {};
    let ans = 0;
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (letters[s[i]]) {
            letters[s[i]]++;
        } else {
            letters[s[i]] = 1;
        }
    }

    for (let temp in letters) {
        ans += parseInt(letters[temp] / 2);
    }
    ans *= 2;
    if (ans < s.length)
        return ans + 1;
    else
        return ans;
};