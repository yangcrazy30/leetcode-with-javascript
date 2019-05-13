/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i=1;
  while(true){
    if(num===i*i)return true;
    if(num<i*i)return false;
    i++;
  }  
};

