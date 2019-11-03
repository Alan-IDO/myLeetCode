/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   s = s.split('');
   
     for(let j=0,leng = s.length;j<leng/2;j++){
        for(let i=0;i<leng;i++){
        if(s[i]=='('&&s[i+1]==')'){
            s.splice(i,2);
        }else if(s[i]=='{'&&s[i+1]=='}'){
            s.splice(i,2);
        }else if(s[i]=='['&&s[i+1]==']'){
            s.splice(i,2);
        }else if(s[i]==' '&&s[i+1]==' '){
            s.splice(i,2);
       }else{
           continue;
       }
    }
         
 }
    if(s.length==0){
        return true;
    }else{
        return false;
    }
};
