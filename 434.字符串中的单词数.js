/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 *
 * https://leetcode-cn.com/problems/number-of-segments-in-a-string/description/
 *
 * algorithms
 * Easy (30.10%)
 * Likes:    34
 * Dislikes: 0
 * Total Accepted:    5.4K
 * Total Submissions: 17.8K
 * Testcase Example:  '"Hello, my name is John"'
 *
 * 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
 * 
 * 请注意，你可以假定字符串里不包括任何不可打印的字符。
 * 
 * 示例:
 * 
 * 输入: "Hello, my name is John"
 * 输出: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let input=s.split(' ');
    let pattern=/\S+$/;
    let count=0;
    for(let word of input){
        if(pattern.test(word))count++
    }
    return count;
};