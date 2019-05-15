/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (55.58%)
 * Likes:    68
 * Dislikes: 0
 * Total Accepted:    9.1K
 * Total Submissions: 16.1K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 
 * 输出：
 * e
 * 
 * 解释：
 * 'e' 是那个被添加的字母。
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // let temp=s.split('');
    // while(t.length>1){

    //     t=t.replace(temp.shift(),'');
    // }
    // return t;
    let len = t.split('').length
    let sum = 0
    for (let i = 0; i < len - 1; i++) {
      sum += t.charCodeAt(i)
      sum -= s.charCodeAt(i)
    }
  
    sum += t.charCodeAt(len - 1)
    return String.fromCharCode(sum)
};

