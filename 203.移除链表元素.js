/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var header = new ListNode(-1);
    header.next = head;
    var cur = header;
    while(cur.next != null){
        if(cur.next.val == val ){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return header.next;
};