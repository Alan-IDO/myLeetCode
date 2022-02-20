/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // console.log(s);
    //临时对象temp用来存储罗马数字字母代表的数值
    let temp = 
        {
            M : 1000,
            D : 500,
            C : 100,
            L : 50,
            X : 10,
            V : 5,
            I : 1
        };
    // console.log(temp[`M`]);
    //把字符串s的类型转换为数组类型
    s.split(``);
    // console.log(s[0]);
    let result = 0;
    let Length =  s.length;
    let pre , next ;
    for(let i = 0; i< Length; i++)
    {
        pre = temp[`${s[i]}`];
        next = temp[`${s[i+1]}`];
        if(pre >= next)
        {
            result += pre;
            // console.log(`i:${i} -->32`,result);
            continue;
        }
        else if(pre < next)
        {
            result += next - pre;
            // console.log(`i:${i} -->38`,result);
            i++;
            continue;
        }
        else(i == Length)
        {
            result += pre;
            // console.log(`i:${i} -->45`,result);
            break
        }
    }
    // console.log(result);
    return result
};
