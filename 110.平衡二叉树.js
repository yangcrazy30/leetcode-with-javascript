/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root)
    return true;
    if(Math.abs(heightNode(root.left)-heightNode(root.right))>1){
        return false;
    }else
    {
        return isBalanced(root.left)&&isBalanced(root.right);
    }

    function heightNode(node){
        if(node==null)
        return -1;
        else
        {
            return Math.max(heightNode(node.left),heightNode(node.right))+1;
        }
    }
};

