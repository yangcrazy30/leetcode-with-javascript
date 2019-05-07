/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n == 0) return 0;
    var squares = n;
    while(squares >= 10){
        var temp = 0;
        while(squares) {
            temp += (squares%10)*(squares%10);
            squares = parseInt(squares/10) ;
        }
        squares = temp;
    }

    if(squares == 1 || squares == 7)
        return true;
    else
        return false;
};