/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    s=s.replace(/\W+|,+/g,'');
    var rs=s.split('').reverse().join('');
    return rs===s;
};
var test='A man, a plan, a canal: Panama';
