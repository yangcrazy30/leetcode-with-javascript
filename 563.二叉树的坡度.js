/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 *
 * https://leetcode-cn.com/problems/binary-tree-tilt/description/
 *
 * algorithms
 * Easy (47.93%)
 * Likes:    32
 * Dislikes: 0
 * Total Accepted:    3.7K
 * Total Submissions: 7.6K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个二叉树，计算整个树的坡度。
 * 
 * 一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。空结点的的坡度是0。
 * 
 * 整个树的坡度就是其所有节点的坡度之和。
 * 
 * 示例:
 * 
 * 
 * 输入: 
 * ⁠        1
 * ⁠      /   \
 * ⁠     2     3
 * 输出: 1
 * 解释: 
 * 结点的坡度 2 : 0
 * 结点的坡度 3 : 0
 * 结点的坡度 1 : |2-3| = 1
 * 树的坡度 : 0 + 0 + 1 = 1
 * 
 * 
 * 注意:
 * 
 * 
 * 任何子树的结点的和不会超过32位整数的范围。
 * 坡度的值不会超过32位整数的范围。
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
var findTilt = function(root) {
    var res = 0;
    //节点的值之和
    function dfs(root){
        if(!root) return 0;
        return dfs(root.left) + root.val + dfs(root.right);
    }
    //节点坡度
    function nodeVal(root){
        return Math.abs(dfs(root.left)-dfs(root.right));
    }
    //累加所有节点坡度
    function getRes(root){
        if(!root) return;
        var temp = nodeVal(root);
        res += temp;
        getRes(root.left);
        getRes(root.right);
    }
    getRes(root);
    return res;
};

