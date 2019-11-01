/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(parseInt(num1)==0 || parseInt(num2)==0){
        return '0';
    }else{
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    let count = [];
    for(let i=0;i<num1.length;i++){
        for(let j=0;j<num2.length;j++){
            count[i+j] =count[i+j] || 0;
            count[i+j] += parseInt(num1[i])*parseInt(num2[j]);
        }
    }
    let temp;
    for(let i=0;i<count.length;i++){
        if(count[i]>9){
            temp = (count[i]/10)<<0;
            count[i] = count[i]%10;
            count[i+1] = count[i+1] || 0;
            count[i+1] += temp;
        }
    }
   return  count.reverse().join('');
    }   
}
