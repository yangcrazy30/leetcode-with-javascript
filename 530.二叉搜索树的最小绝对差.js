/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 *
 * https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (52.34%)
 * Likes:    57
 * Dislikes: 0
 * Total Accepted:    4K
 * Total Submissions: 7.4K
 * Testcase Example:  '[1,null,3,2]'
 *
 * 给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。
 * 
 * 示例 :
 * 
 * 
 * 输入:
 * 
 * ⁠  1
 * ⁠   \
 * ⁠    3
 * ⁠   /
 * ⁠  2
 * 
 * 输出:
 * 1
 * 
 * 解释:
 * 最小绝对差为1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 * 
 * 
 * 注意: 树中至少有2个节点。
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
var getMinimumDifference = function(root) {
    var arr = [];
    function generateArr(root){
        if(!root) return;
        generateArr(root.left);
        arr.push(root.val);
        generateArr(root.right);
    }
    generateArr(root);
    arr.sort((a,b)=>a-b);
    var res;
    for(var i=1;i<arr.length;i++){
        if(res === 0) return res;
        if(!res){
            res = arr[i]-arr[i-1];
        }else{
            res = Math.min(arr[i]-arr[i-1], res);
        }
        
    }
    return res;
};

