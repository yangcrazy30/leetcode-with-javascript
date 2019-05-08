/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head == null || head.next == null) return true;
        
    var slow = head;
    var next = head.next;
    var fast = next.next;
    var odd = false;
    
    slow.next = null;
    
    while (fast != null) {
        if (fast.next == null) odd = true;
        fast = (fast.next != null)? fast.next.next : fast.next;
        // reverse
        var tmp = next.next;
        next.next = slow;
        slow = next;
        next = tmp;
    }
    
    if (odd == true) slow = slow.next;
    
    while (slow != null && next != null) {
        if (slow.val != next.val) return false;
        next = next.next;
        slow = slow.next;
    }
    
    return (slow == next);
};

