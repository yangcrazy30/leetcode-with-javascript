/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 *
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (43.10%)
 * Likes:    78
 * Dislikes: 0
 * Total Accepted:    4.2K
 * Total Submissions: 9.6K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。
 * 
 * 示例 :
 * 给定二叉树
 * 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \     
 * ⁠     4   5    
 * 
 * 
 * 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 * 
 * 注意：两结点之间的路径长度是以它们之间边的数目表示。
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
var diameterOfBinaryTree = function(root) {
    if(root==null)return 0;
    let depth=function(root){
        if(root==null)return 0;
        if(root.left==null&&root.right==null)return 1;
        if(root.left==null)return depth(root.right)+1;
        if(root.right==null)return depth(root.left)+1;
        if(root.right!=null&&root.left!=null)return Math.max(depth(root.left),depth(root.right))+1;
    }
    return Math.max(diameterOfBinaryTree(root.left),diameterOfBinaryTree(root.right),depth(root.left)+depth(root.right));
};

