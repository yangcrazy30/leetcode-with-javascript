/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var ans = '';
    if (n == 1)
        ans = '1';  
    else {
        var temp = countAndSay(n - 1);
        temp = temp.split('');
        var before = temp[0];
        var count = 0;
        while (temp.length != 0) {
            var char = temp.shift();
            if (char == before)
                count++
            else {
                ans = ans + count + before;
                count=1;
                before=char;
            }
        }
        ans = ans + count + before;
    }
    return ans;

};
