/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) return x;
    let left = 0;
    let right = x;
    while (left < right - 1) {
        let mid = Math.floor((left + right) / 2);
        let val = mid * mid;
        if (val == x) return mid;
        if (val > x) right = mid;
        else left = mid;
    }
    return left;
};