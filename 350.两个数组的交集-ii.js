/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var obj1 = {},
        res = [];
    for (var i = 0; i < nums1.length; i++) {
        var key = nums1[i].toString();
        if (key in obj1) {
            obj1[key] += 1;
        } else {
            obj1[key] = 1;
        }
    }
    for (var i = 0; i < nums2.length; i++) {
        var key = nums2[i].toString();
        if (key in obj1) {
            if (obj1[key] > 0) {
                res.push(nums2[i]);
                obj1[key] -= 1;
            }
        }
    }
    return res;
};