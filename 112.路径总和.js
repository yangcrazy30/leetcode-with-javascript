/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */
/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var hasPathSum = function (root, sum) {
    if (root == null)
        return false;
    else if (root.left == null && root.right == null && sum - root.val == 0)
        return true;
    else if (root.left == null && root.right == null && sum - root.val != 0)
        return false;
    else {
        if (root.left != null && root.right != null)
            return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
        if (root.right != null)
            return hasPathSum(root.right, sum - root.val);
        if (root.left != null)
            return hasPathSum(root.left, sum - root.val);
    }
};