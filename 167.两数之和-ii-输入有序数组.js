/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var m = 0;
    var n = numbers.length - 1;

    while (m < n) {
        if (numbers[m] + numbers[n] == target)
            return [m+1,n+1];
        else if (numbers[m] + numbers[n] < target)
            m++;
        else
            n--;
    }
};
var num=[0,0,3,4];
console.log(twoSum(num,0))
