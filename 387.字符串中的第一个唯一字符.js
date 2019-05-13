/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (37.62%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    29.1K
 * Total Submissions: 76.4K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // var str=s;
    // var len=0;
    // var reg;
    // var temp='';
    // while(str.length>0){
    //     len=str.length;
    //     temp=str[0];
    //     reg=new RegExp(temp,'g');
    //     str=str.replace(reg,'')
    //     if(str.length===len-1)return s.indexOf(temp);
    // }
    // return -1;
    let m  = new Map();
    for(let i =0;i<s.length;i++){
        if(m.has(s[i])){
            m.set(s[i],-1);
        }else{
            m.set(s[i],i);
        }    
        
    }
    
    for(let i =0;i<s.length;i++){
        let v = m.get(s[i]);
        if(v !=-1)
          return i;
     }
    return -1;
};