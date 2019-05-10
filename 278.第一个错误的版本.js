/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n == 1) return 1;
        let lo = 1, hi = n; 
        while(lo < hi){
            let m = lo + parseInt((hi - lo) / 2);
            if(isBadVersion(m)){
                hi = m;
            }else{
                lo = m + 1;
            }
        }
        
        return lo;
    };
};

