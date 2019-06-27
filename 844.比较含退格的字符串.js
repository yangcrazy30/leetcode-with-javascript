/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 *
 * https://leetcode-cn.com/problems/backspace-string-compare/description/
 *
 * algorithms
 * Easy (46.15%)
 * Likes:    53
 * Dislikes: 0
 * Total Accepted:    6.7K
 * Total Submissions: 14.3K
 * Testcase Example:  '"ab#c"\n"ad#c"'
 *
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：S = "ab#c", T = "ad#c"
 * 输出：true
 * 解释：S 和 T 都会变成 “ac”。
 * 
 * 
 * 示例 2：
 * 
 * 输入：S = "ab##", T = "c#d#"
 * 输出：true
 * 解释：S 和 T 都会变成 “”。
 * 
 * 
 * 示例 3：
 * 
 * 输入：S = "a##c", T = "#a#c"
 * 输出：true
 * 解释：S 和 T 都会变成 “c”。
 * 
 * 
 * 示例 4：
 * 
 * 输入：S = "a#c", T = "b"
 * 输出：false
 * 解释：S 会变成 “c”，但 T 仍然是 “b”。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= S.length <= 200
 * 1 <= T.length <= 200
 * S 和 T 只含有小写字母以及字符 '#'。
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {  
    /*
    不是很有必要回溯呀
    */  
    // let backspace=function(W,index){
    //     for(let i=index;i<W.length;i++){
    //         let warray=W.split('');
    //         if(W.charAt(i)==='#'){
    //             if(i==0){
    //                 warray.shift();
    //                 return backspace(warray.join(''),0)
    //             }
    //             else{
    //                 warray[i]='';
    //                 warray[i-1]='';
    //                 return backspace(warray.join(''),i-1);
    //             }
    //         }
    //     }
    //     return W;
    // }
    // let a=backspace(S,0);
    // let b=backspace(T,0);
    // if(a===b)return true;
    // else return false;
    S = S.split('')
    T = T.split('')
  let task = item => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === '#') {
        if (i > 0) {
          item.splice(i, 1);
          item.splice(i - 1, 1);
          i--
        }else if(i === 0){
          item.splice(0, 1);
        }
        i--
      }
    }
    return item
  };
  S = task(S).join()
  T = task(T).join()
  return S === T
};
