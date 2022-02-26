/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    //s中的数字和字母的数量差为1或0才能输出符合要求的结果
    //48~57为0-9对应的ASCLL
    //97~122为26个小写字母的ASCLL
    //把s转换为数组类型方便使用数组方法
    s = s.split(``);
    //定义空数组来储存s中的数字
    let digit = [];
    //s数组的长度
    let Length  = s.length;
    for(let i = 0; i<Length; i++)
    {
        let ASC = s[i].charCodeAt();
        if(48 <= ASC && ASC <= 57)
        {
            digit.push(s[i]);
            // console.log(digit);
            s.splice(i,1);
            i--;
            Length--;
        }
    }
    let temp = digit.length - Length;
    // console.log(temp);
    if(temp > 1 || temp < -1) 
    { 
        return ``
    }  
    else if(temp >=0)
    {
        console.log(`else if `);
        // 1 a 2 b 3 
        // a b c 
        // a 1 b c 
        // 
        for(let i = 0; i < Length; i++)
        {
            digit.splice(2*i+1,0,s[i]);
            // console.log(digit);
            // i++;
        }
         return digit.join(``);
    }
    else
    {
        // console.log(`else`);
        for(let i = 0; i < digit.length; i++)
        {
            s.splice(2*i+1,0,digit[i]);
            // console.log(s);
            // i++;
        }
         return s.join(``);
    }
};
