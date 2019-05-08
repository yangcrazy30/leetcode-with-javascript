/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) || [...map.values()].includes(t[i])) {
            if (map.get(s[i]) !== t[i]) { 
                return false;
            }
        } else {
            map.set(s[i], t[i]);
        }
    }
    return true;
};

