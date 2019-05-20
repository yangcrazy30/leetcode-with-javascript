/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] k个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (50.95%)
 * Likes:    203
 * Dislikes: 0
 * Total Accepted:    11.2K
 * Total Submissions: 21.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。
 * 
 * 示例 :
 * 
 * 给定这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 
 * 说明 :
 * 
 * 
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k==1||head==null)
        return head;
    var Head=head,
        qstart,
        jsq=1,
        start,
        start1,
        end;
    while(jsq<k){
        jsq+=1;
        Head=Head.next;
        if(Head==null)
            return head;
    }
    jsq=1;
    start=head;
    end=head;
    while(end!==null&&end.next!==null){
        jsq+=1;
        end=end.next;
        if(jsq==k){
            start1=end.next;
            var fz1=start,
                fz2=fz1.next,
                fz3=fz2.next;
            while(fz1!==end&&fz2!==end){
                fz2.next=fz1;
                fz1=fz2;
                fz2=fz3;
                fz3=fz3.next;
            }
            fz2.next=fz1;
            if(qstart!==undefined){
                qstart.next=end;
                qstart=start;
            }else{
                qstart=start;
            }
            start=start1;
            end=start;
            jsq=1;
        }
    }
    if(start!==null)
        qstart.next=start;
    else
        qstart.next=null;
    return Head;
};

