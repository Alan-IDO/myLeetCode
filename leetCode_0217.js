/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let Length  = nums.length,result = false;
    for(let i = 0; i<Length-1; i++)
    {
        for(let j = i+1; j<Length; j++)
        {
            if(nums[i] == nums[j])
            {
               result = true;
                i = Length-1;
                // console.log(i,j,`14`);
               break; 
            }
        }
    }
    return result;
};
