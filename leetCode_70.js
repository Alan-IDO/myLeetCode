/**
 * @param {number} n
 * @return {number}
 */
// 递归方法解决此问题 --> time limit exceeded
var climbStairs = function(n) {
  let sum = [];
  sum [0] = 1;
  sum[1] = 1;
  sum[2] = 2;
  if(n == 1){return 1}
  else if(n == 2) {return 2}
  else {
      for(let i = 3; i<=n; i++)
      {
        sum[i] = sum[i-1]+sum[i-2];
      }
    return sum[n]
  }
};
