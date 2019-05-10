/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词模式
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    if (pattern.length != str.split(' ').length) return false;
    var words = str.split(' ');
    var p = pattern.split('');
    var map = new Map();
    var set = new Set();
    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(p[i])) {
            if (!set.has(words[i])) {
                map.set(p[i], words[i]);
                set.add(words[i]);
            } else
                return false;
        } else {
            if (map.get(p[i]) !== words[i]) return false;
        }
    }
    return true;
};