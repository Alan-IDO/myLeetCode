/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    //判断每行列 是否存在重复的数字
      for(let i = 0; i<9; i++)
      {
          for(let j = 0; j<9; j++)
          {
              // console.log(`board[${i}][${j}]`);
              if(board[i][j] != '.')
              {
                  //判断某个位置的行是否存在重复数字
                  for(let k = j+1; k<9; k++)
                  {
                      //console.log(`k-->${k}`);
                      if(board[i][j] == board[i][k])
                      {
                          console.log(`i->${i} j->${j} k->${k}`); 
                          return false 
                      }
                  }
                  ////判断某个位置的列是否存在重复数字
                  for(let k = i+1; k<9; k++)
                  {
                      // console.log(`k-->${k}`);
                      if(board[i][j] == board[k][j])
                      {
                          // console.log(`i->${i} j->${j} k->${k}`); 
                          return false 
                      }
                  }
              }
              
          }
      }
    
    //判断九个栅格内是否纯在重复的数字
     //先用一个双重循环获得九个矩阵的左上角数字的 index
       for(let i = 0; i<3; i++)
       {
           for(let j = 0; j<3; j++)
           {
               // console.log(`${i*3},${j*3}`);
               let m = i*3;
               let n = j*3;
               let arr = [];
               for(let x = m; x<m+3; x++)
               {
                   for(let y = n; y<n+3; y++)
                   {
                      // console.log(x,y);
                      if(board[x][y] != '.')
                      {
                          arr.push(board[x][y]); 
                      }
                   }
               }
               if(arr.length>1)
               {
                   for(let i = 0; i<arr.length-1; i++)
                   {
                       for(let j = i+1; j<arr.length; j++)
                       {
                           if(arr[i] == arr[j]) return false;
                       }
                   }
               }
               // console.log(arr);
           }
       }
    //前面两个判定都满足的话就返回 true
    return true;
};
