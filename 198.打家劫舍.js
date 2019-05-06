/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var count=[];
    if(nums.length==0){return 0;}
    //max用来保存当前的最大值
    var max=nums[0];
    for(var i=0;i<nums.length;i++){
        if(i==0){
            count.push(nums[0]);
        }else if(i==1){
            count.push(nums[1]>nums[0]?nums[1]:nums[0]);
            if(max<count[count.length-1]){max=count[i]}
        }else{
        //两种情况
            var t1=count[i-2]+nums[i];
            var t2=count[i-1];
            count.push(t1>t2?t1:t2);
            if(max<count[count.length-1]){max=count[i]}
        }
    }
    return max;
};

