/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (25.43%)
 * Likes:    83
 * Dislikes: 0
 * Total Accepted:    6.7K
 * Total Submissions: 25.9K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入：
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * 输出：[]
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let f = words[0];
    if(!f){
        return []
    }
    let wlen = f.length;
    let temp;
    let w = [...words];
    let count=0,left=0,right=0;
    let res = [];
    while(right + wlen <= s.length){
        let state = false;
        temp = s.slice(right,right + wlen)
        right += wlen;
        for(let i=0;i<w.length;i++){
            if(w[i] == temp){
                state = true;
                w.splice(i,1)
                count++;
                break;
            }
        }
        // console.log(temp,left,right,count)
        if(!state){ // 不存在
            left ++;
            right = left;
            count = 0;
            w = [...words];
            continue;
        }
        if(count == words.length){ // 满足条件，push进结果数组，重置条件，继续迭代
            res.push(left)
            count = 0;
            w = [...words];
            left ++;
            right = left;
        }
    }
    return res
};

