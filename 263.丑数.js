/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num==1)return true;
    while(num!=0){
        num=num%2==0?num/2:num%3==0?num/3:num%5==0?num/5:-1;
        if(num==1)
        return true;
        else if(num==-1)
        return false;
    }
    return false;
};
