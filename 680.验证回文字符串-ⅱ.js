/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (30.14%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    4.9K
 * Total Submissions: 15.9K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "aba"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 
 * 
 * 注意:
 * 
 * 
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(isPalindrome(s)) return true;
    for(var i=0,j=s.length-1;i<=j;){
        if(s[i] !== s[j]){
            var str1 = s.substring(0,i)+s.substring(i+1);
            var str2 = s.substring(0,j)+s.substring(j+1);
            if(isPalindrome(str1) || isPalindrome(str2)){
                return true;
            }
            return false;
        }else{
            i++;
            j--;
        }
    }
    return true;
    function isPalindrome(str){
        return str === str.split('').reverse().join('');
    }
};

