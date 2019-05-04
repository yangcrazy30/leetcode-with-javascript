/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack=[];
    this.min=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.stack.length==1){
        this.min.push(x);
    }
    else
    {
        if(x<this.min[this.min.length-1])
        this.min.push(x);
        else
        this.min.push(this.min[this.min.length-1])
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop(); 
    this.min.pop()   
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};


//  var obj = new MinStack()
//  obj.push(1)
//  console.log(obj)
//  var param_3 = obj.top()
//  var param_4 = obj.getMin()
//  console.log(param_4);
 

