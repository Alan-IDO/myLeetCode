/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for(let i = 0 ; i<strs.length ; i++){
        strs[i] = strs[i].split("");
    }
    let outStr = '';
    // console.log(strs);
    let Switch = true;
    if(strs.length==1){
        return strs[0].join("");
    }else if(strs.length == 0) return outStr;
    else{
        for(let i = 0 ; i<strs[0].length ; i++) {
            if(Switch){
                for(let j =1 ; j<strs.length ; j++) {
                    if(strs[j][i]!=strs[0][i]){
                        Switch = false;
                        break;
                    }else continue;
                }
                if(Switch) outStr += strs[0][i];
            }
        }
        return outStr;
    }
};
