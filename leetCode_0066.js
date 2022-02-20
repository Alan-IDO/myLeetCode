/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   digits.reverse();
  let temp = 1;
  for(let i = 0; i<digits.length; i++)
  {
    if(digits[i]+temp >= 10)
    {
      digits[i] = (digits[i] + temp)%10;
      temp = 1;
    }
    else
    {
      digits[i] = digits[i] + temp;
      temp = 0;
    }
  }
  if(temp == 1)
  {
    digits.push(temp);
  }
  digits.reverse();
  return digits;
};
