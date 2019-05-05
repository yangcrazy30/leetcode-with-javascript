/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var ans=0;
    var input=s.split('');
    input.reverse();
    for(let i=0;i<input.length;i++)
    {
        ans+=Math.pow(26,i)*(input[i].charCodeAt()-64);
    }
    return ans;
};

