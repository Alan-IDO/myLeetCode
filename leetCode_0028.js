/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length==0){
        return 0;
    }else{
 
        if(haystack.indexOf(needle)==-1){
            return -1;
        }else{
          return  haystack.indexOf(needle); 
        }
    }
};
