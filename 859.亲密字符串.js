/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 *
 * https://leetcode-cn.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (24.75%)
 * Likes:    50
 * Dislikes: 0
 * Total Accepted:    4.6K
 * Total Submissions: 18.1K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false
 * 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入： A = "ab", B = "ba"
 * 输出： true
 * 
 * 
 * 示例 2：
 * 
 * 输入： A = "ab", B = "ab"
 * 输出： false
 * 
 * 
 * 示例 3:
 * 
 * 输入： A = "aa", B = "aa"
 * 输出： true
 * 
 * 
 * 示例 4：
 * 
 * 输入： A = "aaaaaaabc", B = "aaaaaaacb"
 * 输出： true
 * 
 * 
 * 示例 5：
 * 
 * 输入： A = "", B = "aa"
 * 输出： false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= A.length <= 20000
 * 0 <= B.length <= 20000
 * A 和 B 仅由小写字母构成。
 * 
 * 
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    // let a=[],b=[];
    // if(A.length!=B.length)return false;
    // else{
    //     for(let i=0;i<A.length;i++){
    //         if(A.charAt(i)!=B.charAt(i)){
    //             a.push(A.charAt(i));
    //             b.push(B.charAt(i));
    //         }
    //     }
    //     if(a.length!=2){
    //         if(a.length==0)return [...new Set(A.split(''))].length!=A.length;
    //         else
    //             return false;
    //     }
    //     else{
    //         return a.sort().join('')===b.sort().join('');
    //     }
    // }
    let aLen = A.length;
    if (aLen !== B.length) return false;
    let x = [];
    let y = [];
    for (let i = 0; i < aLen; i++) {
      if (A[i] !== B[i]) {
        x.push(A[i]);
        y.push(B[i]);
        if(x.length>2)return false
      }
    }
    if (x.length === 2) {
      if (x[0] === y[1] && x[1] === y[0]) {
        return true;
      }
    } else if (x.length === 0) {
        // 有相同字母就可以交换
      if (new Set(A).size !== aLen) {
        return true;
      }
    }
    return false;
};

