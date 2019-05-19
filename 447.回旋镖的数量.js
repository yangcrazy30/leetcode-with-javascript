/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Easy (53.82%)
 * Likes:    49
 * Dislikes: 0
 * Total Accepted:    4.2K
 * Total Submissions: 7.8K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k
 * 之间的距离相等（需要考虑元组的顺序）。
 * 
 * 找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * [[0,0],[1,0],[2,0]]
 * 
 * 输出:
 * 2
 * 
 * 解释:
 * 两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 * 
 * 
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    if(points.length < 3) return 0;
    var count = 0;
    for(var i=0;i<points.length;i++){
        var map = new Map();
        for(var j=0;j<points.length;j++){
            if(j===i) continue;
            var len = (Math.pow(points[i][0]-points[j][0], 2) + Math.pow(points[i][1]-points[j][1], 2))>>0;
            if(map.has(len)){
                map.set(len, map.get(len)+1);
            }else{
                map.set(len, 1);
            }
        }
        for(var v of map.values()){
            if(v >= 2){
                count += v * (v - 1)
            }
        }
    }
    return count;
};

