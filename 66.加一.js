/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry=0;
    var input=digits;
    var length=digits.length;
    var temp=digits[length-1]+1+carry;
    if(temp>=10)
    {
        carry=1;
        input[length-1]=temp-10;
    }
    else
    {
        input[length-1]=temp;
    }
    length--;
    while(length>0)
    {
        length--;
        temp=input[length]+carry;
        if(temp>=10)
        {
            carry=1;
            input[length]=temp-10;
        }
        else
        {
            input[length]=temp;
            carry=0;
            break;
        }
      
    }
    if(carry==1)
        input.unshift(1);
    return input;
};
plusOne([9])

