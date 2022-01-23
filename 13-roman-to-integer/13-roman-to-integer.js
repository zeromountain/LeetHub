/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    

    let result = 0;
    let current;
    let next;
    
    for(let i = 0; i < s.length;){
        
        current = obj[s.charAt(i)]; 
        next = obj[s.charAt(i+1)]; 
        
        if(i < s.length - 1){
            if(current >= next){    
                result += current;   
                i++; 
            } else {
                result += (next - current);
                i = i+2;  
            }    
        } else {
            result += current;
            i++;
        }
    } 
   return result;
};