/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    if(root==null)
        return 0;
    if(root.left==null&&root.right==null)
        return 1;     
    else{
        if(root.left!=null&&root.right!=null)
            return Math.min(minDepth(root.left),minDepth(root.right))+1;    
        if(root.left==null)
            return minDepth(root.right)+1;
        if(root.right==null)
            return minDepth(root.left)+1;        

    }
};

