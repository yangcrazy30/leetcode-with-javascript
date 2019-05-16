/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 *
 * https://leetcode-cn.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (31.15%)
 * Likes:    57
 * Dislikes: 0
 * Total Accepted:    7.8K
 * Total Submissions: 24.8K
 * Testcase Example:  '[3,2,1]'
 *
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [3, 2, 1]
 * 
 * 输出: 1
 * 
 * 解释: 第三大的数是 1.
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1, 2]
 * 
 * 输出: 2
 * 
 * 解释: 第三大的数不存在, 所以返回最大的数 2 .
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: [2, 2, 3, 1]
 * 
 * 输出: 1
 * 
 * 解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
 * 存在两个值为2的数，它们都排第二。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums=[...new Set(nums)]
    if(nums.length<3){
        nums=nums.sort();
        return nums[nums.length-1];
    }
    let [first,second,third]=[-9999999997,-9999999998,-9999999999];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>first){
            [first,second,third]=[nums[i],first,second];
        }else if(nums[i]<first){
            if(nums[i]>second){
                [first,second,third]=[first,nums[i],second];
            }else if(nums[i]<second){
                if(nums[i]>third){
                    third=nums[i];
                }
            }
        }
    }
    return third;
};
thirdMax([1,2,-2147483648])
