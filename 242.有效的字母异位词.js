/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // var left = s.split('');
    // var right = t.split('');
    // var remove = '';
    // if (left.length != right.length)
    //     return false;
    // while (left.length != 0) {
    //     remove = left.shift();
    //     left = left.filter((value) => {
    //         return value != remove
    //     });
    //     right = right.filter((value) => {
    //         return value != remove
    //     });
    //     if (right.length != left.length) return false;
    // }
    // if (right.length == 0)
    //     return true;
    // return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
};
