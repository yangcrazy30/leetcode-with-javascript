/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 *
 * https://leetcode-cn.com/problems/letter-case-permutation/description/
 *
 * algorithms
 * Easy (53.09%)
 * Likes:    76
 * Dislikes: 0
 * Total Accepted:    5.3K
 * Total Submissions: 9.4K
 * Testcase Example:  '"a1b2"'
 *
 * 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 * 
 * 
 * 示例:
 * 输入: S = "a1b2"
 * 输出: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * 输入: S = "3z4"
 * 输出: ["3z4", "3Z4"]
 * 
 * 输入: S = "12345"
 * 输出: ["12345"]
 * 
 * 
 * 注意：
 * 
 * 
 * S 的长度不超过12。
 * S 仅由数字和字母组成。
 * 
 * 
 */
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    var res = [];
    function get(prefix, str){
        if(!str){
            res.push(prefix);
            return;
        }
        //var currentChar = str[0];
        //var rest = str.slice(1).split('');
        //解构赋值
        var [currentChar, ...rest] = str;
        if(/[a-zA-Z]/.test(currentChar)){
            var lowerPrefix = prefix + currentChar.toLowerCase();
            var upperPrefix = prefix + currentChar.toUpperCase();
            var resStr = rest.join('');
            get(lowerPrefix, resStr);
            get(upperPrefix, resStr);
        }else{
            prefix += currentChar;
            get(prefix, rest.join(''));
        }
    }
    get('', S);
    return res;
};

