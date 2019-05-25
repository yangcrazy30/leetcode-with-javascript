/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 *
 * https://leetcode-cn.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (65.77%)
 * Likes:    40
 * Dislikes: 0
 * Total Accepted:    7.2K
 * Total Submissions: 10.9K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: ["Hello", "Alaska", "Dad", "Peace"]
 * 输出: ["Alaska", "Dad"]
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 你可以重复使用键盘上同一字符。
 * 你可以假设输入的字符串将只包含字母。
 * 
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let first={q:1,w:1,e:1,r:1,t:1,y:1,u:1,i:1,o:1,p:1,a:2,s:2,d:2,f:2,g:2,h:2,j:2,k:2,l:2,z:3,x:3,c:3,v:3,b:3,n:3,m:3};
    let ans=[];
    for(let word of words){
        let group=first[word.toLowerCase()[0]];
        for(var i=0;i<word.length;i++){
            if(first[word.toLowerCase()[i]]!=group)break;
        }
        if(i==word.length)ans.push(word);
    }
    return ans;
};

