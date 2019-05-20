/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (30.55%)
 * Likes:    189
 * Dislikes: 0
 * Total Accepted:    12.9K
 * Total Submissions: 41.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    let state = false;
    if(len <= 1){
        
    }else{
        let end = len-1;
        let start = 0;
        while(end > 0){
            if(nums[end-1] < nums[end]){
                end--;
                state = true;
                break;
            }
            end--;
        }
        if(!state){
            nums.sort((a,b)=>a-b)
        }else{  
            start = end+1;
            while(start < len){
                if(nums[start] > nums[end]){
                    start++;
                    continue;
                }
                break;
            }
            start--;
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            let rec = nums.slice(end+1).sort((a,b)=>a-b);
            nums.splice(end+1,len - end - 1,...rec)
        }

    }
};

