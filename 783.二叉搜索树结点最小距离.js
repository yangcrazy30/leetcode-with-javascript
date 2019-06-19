/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树结点最小距离
 *
 * https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/description/
 *
 * algorithms
 * Easy (51.49%)
 * Likes:    24
 * Dislikes: 0
 * Total Accepted:    3.4K
 * Total Submissions: 6.5K
 * Testcase Example:  '[4,2,6,1,3,null,null]'
 *
 * 给定一个二叉搜索树的根结点 root, 返回树中任意两节点的差的最小值。
 * 
 * 示例：
 * 
 * 
 * 输入: root = [4,2,6,1,3,null,null]
 * 输出: 1
 * 解释:
 * 注意，root是树结点对象(TreeNode object)，而不是数组。
 * 
 * 给定的树 [4,2,6,1,3,null,null] 可表示为下图:
 * 
 * ⁠         4
 * ⁠       /   \
 * ⁠     2      6
 * ⁠    / \    
 * ⁠   1   3  
 * 
 * 最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。
 * 
 * 注意：
 * 
 * 
 * 二叉树的大小范围在 2 到 100。
 * 二叉树总是有效的，每个节点的值都是整数，且不重复。
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
var minDiffInBST = function(root) {
    // if(root==null||root.left==null&&root.right==null)return Number.MAX_VALUE;
    // let left,right;
    // if(root.left==null){
    //     left=Number.MAX_VALUE;
    //     right=Math.abs(root.val-root.right.val)
    // }
    // else if(root.right==null){
    //     left=Math.abs(root.val-root.left.val);
    //     right=Number.MAX_VALUE;
    // }else{
    //     left=Math.abs(root.val-root.left.val);
    //     right=Math.abs(root.val-root.right.val)
    // }
    // return Math.min(left,right,minDiffInBST(root.left),minDiffInBST(root.right));
    const vals = [];
    const preOrderDfs = node => {
        if(!node) return;
        preOrderDfs(node.left);
        vals.push(node.val);
        preOrderDfs(node.right);
    }
    preOrderDfs(root)
    
    const result = [];
    vals.reduce((a, b) => {
        result.push(b - a);
        return b;
    });
    
    return Math.min(...result)

};

