/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (49.49%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    6.5K
 * Total Submissions: 13.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
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
 * @return {number}
 */

 function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
     }
var sumOfLeftLeaves = function (root) {
    if (root == null) return 0;
    if (root.left && root.left.left == null && root.left.right == null)
        return root.left.val + sumOfLeftLeaves(root.right);
    else
        return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
