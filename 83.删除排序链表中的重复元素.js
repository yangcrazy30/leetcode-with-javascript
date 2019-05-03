/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */


 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var hash={};
    var current=head;
    var temp=new ListNode();
    var ans=temp;
    while(current!=null)
    {
        if(hash[current.val]==undefined)
        {
            hash[current.val]=current.val
            temp.next=current;
            temp=temp.next;
        }
        current=current.next;
    }
    temp.next=null;
    return ans.next;
};