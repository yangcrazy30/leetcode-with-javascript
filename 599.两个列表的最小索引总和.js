/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 *
 * https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/description/
 *
 * algorithms
 * Easy (45.05%)
 * Likes:    37
 * Dislikes: 0
 * Total Accepted:    4.3K
 * Total Submissions: 9.5K
 * Testcase Example:  '["Shogun","Tapioca Express","Burger King","KFC"]\n["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]'
 *
 * 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
 * 
 * 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。
 * 
 * 示例 1:
 * 
 * 输入:
 * ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 * ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse",
 * "Shogun"]
 * 输出: ["Shogun"]
 * 解释: 他们唯一共同喜爱的餐厅是“Shogun”。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 * ["KFC", "Shogun", "Burger King"]
 * 输出: ["Shogun"]
 * 解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
 * 
 * 
 * 提示:
 * 
 * 
 * 两个列表的长度范围都在 [1, 1000]内。
 * 两个列表中的字符串的长度将在[1，30]的范围内。
 * 下标从0开始，到列表的长度减1。
 * 两个列表都没有重复的元素。
 * 
 * 
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var res = [];
    var index;
    var arr = [];
    for(var i=0;i<list1.length;i++){
        if(list2.includes(list1[i])){
            index = i + list2.indexOf(list1[i]);
            arr.push({str: list1[i], index: index});
        }
    }
    if(arr.length < 2){
        res.push(arr[0].str);
        return res;
    }
    arr.sort((a, b) => a.index - b.index);
    var firstIndex = arr[0].index;
    arr.filter((e, index)=>{
        if(e.index === firstIndex){
            res.push(e.str);
        }
    });
    return res;
};

