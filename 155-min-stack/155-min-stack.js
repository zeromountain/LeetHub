var MinStack = function() {
    this.stack = []
    
    // keep track of the current min the moment
    // an item is pushed onto the stack
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    
    this.minStack.push(Math.min(val, valueOr(peek(this.minStack), Infinity)))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popped = this.stack.pop();
    
    this.minStack.pop();
    
    return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return peek(this.stack)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return peek(this.minStack)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const peek = (arr) => {
    if (arr.length === 0) {
        return undefined;
    }
    
    return arr[arr.length - 1];
}

const valueOr = (val, other) => {
    if (val === null || val === undefined) {
        return other;
    }
    
    return val;
}