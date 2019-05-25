/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 *
 * https://leetcode-cn.com/problems/next-greater-element-i/description/
 *
 * algorithms
 * Easy (58.25%)
 * Likes:    77
 * Dislikes: 0
 * Total Accepted:    8.5K
 * Total Submissions: 14.4K
 * Testcase Example:  '[4,1,2]\n[1,3,4,2]'
 *
 * 给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2
 * 中的下一个比其大的值。
 * 
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
 * 输出: [-1,3,-1]
 * 解释:
 * ⁠   对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
 * ⁠   对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
 * ⁠   对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums1 = [2,4], nums2 = [1,2,3,4].
 * 输出: [3,-1]
 * 解释:
 * 对于num1中的数字2，第二个数组中的下一个较大数字是3。
 * ⁠   对于num1中的数字4，第二个数组中没有下一个更大的数字，因此输出 -1。
 * 
 * 
 * 注意:
 * 
 * 
 * nums1和nums2中所有元素是唯一的。
 * nums1和nums2 的数组大小都不超过1000。
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const monoStack=[];
    const resultMap={};
    
    for(let i=0;i<nums2.length;i++) {
      const n=nums2[i];
      let top=monoStack[monoStack.length-1];
      if(monoStack.length===0 || top>n) {
        monoStack.push(n);
      } else if(top<n){
        while(top!=null && top<n) {
          const poppedEle=monoStack.pop();
          resultMap[poppedEle]=n;
          top=monoStack[monoStack.length-1];
        }
        monoStack.push(n);
      }
    }
    
    const ret=[];
    for(let i=0;i<nums1.length;i++) {
      ret[i]=resultMap[nums1[i]] || -1;
    }
    
    return ret;
};

