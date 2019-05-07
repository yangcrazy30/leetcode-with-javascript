/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    var notPrime = new Array(n);
    var res = 0;
    notPrime.fill(false);
    for(let i = 2; i < n; i++){
        if(notPrime[i] == false){
            res++;
            for(let j = 2; i * j < n; j++){
                notPrime[i * j] = true;
            }
        }
    }
    return res;
};
