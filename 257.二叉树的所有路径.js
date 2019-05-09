/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root === null)return [];
    const {left, right, val} = root;
    if (!(left || right)) return [String(val)];
    let result = [];
    if (left) result = result.concat(binaryTreePaths(left).map(v => val + "->" + v));
    if (right) result = result.concat(binaryTreePaths(right).map(v => val + "->" + v));
    return result;   
};

