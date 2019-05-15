/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let input=s.split('');
    let orgin=new Set();
    let order=[];
    let chars=[];
    orgin.add('a');orgin.add('e');orgin.add('i');orgin.add('o');orgin.add('u');
    orgin.add('A');orgin.add('E');orgin.add('I');orgin.add('O');orgin.add('U');
    let len=input.length;
    for(let i=0;i<len;i++)
    {
        if(orgin.has(input[i])){
            order.push(i);
            chars.push(input[i]);
        }
    }
    chars=chars.reverse();
    for(let i=0;i<chars.length;i++)
    {
        input[order[i]]=chars[i];
    }
    return input.join('');
};

