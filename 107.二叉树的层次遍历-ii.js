/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root==null){
        return [];
    }
    var result=[];
    var queue=[];
    queue.push(root);
    while(queue.length!=0){
            var node=[];
            var nodeValue=[];
            for(var i in queue){
                if(queue[i].left!=null){
                    node.push(queue[i].left);
                }
                if(queue[i].right!=null){
                    node.push(queue[i].right);
                }
                nodeValue.push(queue[i].val);
            }
            result.push(nodeValue);
            queue=node;   
        }    
    return result.reverse();
};

