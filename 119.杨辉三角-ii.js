/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var ans = [];
    if (rowIndex == 0) {
        ans= [1];
        return ans;
    };
    if (rowIndex == 1) {
        ans= [1, 1];
        return ans;
    }
    var temp = getRow(rowIndex - 1);
    ans.push(1);
    for (let i = 0; i < temp.length - 1; i++) {
        ans.push(temp[i] + temp[i + 1]);
    }
    ans.push(1);
    return ans;
};

