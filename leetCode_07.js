/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let a = Math.pow(2,31)-1 ;
    let b = Math.pow(-2,31);
    if(x>=0){
        let myNum = parseInt( x.toString().split('').reverse().join('') );
        if(myNum>=a){
            return 0;
        }else{
            return myNum;
        }
    }else if(x<0){
        x = -x;
        let myNum = -parseInt( x.toString().split('').reverse().join('') );
        if(myNum<=b){
            return 0;
        }else{
            return myNum;
        }
    }
};
