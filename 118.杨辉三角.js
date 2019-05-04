/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var ans = [];
    var item = [];
    if (numRows == 0) {
        ans = [];
        return ans;
    }
    if (numRows == 1) {
        ans[0] = [1];
        return ans;
    };
    if (numRows == 2) {
        ans[0] = [1];
        ans[1] = [1, 1];
        return ans;
    }
    var temp = generate(numRows - 1);
    var pre = temp[temp.length - 1];
    item.push(1);
    for (let i = 0; i < pre.length - 1; i++) {
        item.push(pre[i] + pre[i + 1]);
    }
    item.push(1);
    temp.push(item);
    return temp;
};