/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 *
 * https://leetcode-cn.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Easy (48.94%)
 * Likes:    139
 * Dislikes: 0
 * Total Accepted:    5.2K
 * Total Submissions: 10.6K
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * 给定一个二叉树，它的每个结点都存放着一个整数值。
 * 
 * 找出路径和等于给定数值的路径总数。
 * 
 * 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 
 * 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。
 * 
 * 示例：
 * 
 * root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
 * 
 * ⁠     10
 * ⁠    /  \
 * ⁠   5   -3
 * ⁠  / \    \
 * ⁠ 3   2   11
 * ⁠/ \   \
 * 3  -2   1
 * 
 * 返回 3。和等于 8 的路径有:
 * 
 * 1.  5 -> 3
 * 2.  5 -> 2 -> 1
 * 3.  -3 -> 11
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    var count = 0; /*    递归的时候把上一级的path传入。*/
    var binaryTreePaths = function(root, path) {
        if (!root) {
            return;
        }
        var val = root.val;
        path = path ? path + '->' + val : val.toString(); /*        翻转处理一下，从最后一个往前加。*/
        var resPath = path.split('->').map(function(v) {
            return Number(v);
        }).reverse();
        resPath.reduce(function(a, b) {
            var inSum = a + b; /*            这个迭加。中间有值一样的，也加上。*/
            if (inSum == sum) {
                count++;
            }
            return inSum;
        }, 0);
        root.left && binaryTreePaths(root.left, path);
        root.right && binaryTreePaths(root.right, path);
    }
    binaryTreePaths(root);
    return count;
};


