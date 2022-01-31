/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let res = 0;
    let MAX = 2 ** 31 -1 , MIN = -(2 ** 31);
    
    while(x){
        let pop = x % 10;
        
        if(res > getFloor(MAX) || (res === getFloor(MAX) && pop > MAX % 10)) return 0;
        if(res < getFloor(MIN) || (res === getFloor(MIN) && pop < MIN % 10)) return 0;
        
        res = res * 10 + pop;
        x = getFloor(x) // will give -12 in -123
    }
    return res;
};

function getFloor(x){
    return Math.sign(x) * Math.floor(Math.abs(x/10));
}