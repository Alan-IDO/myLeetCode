/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let Length = nums.length;
    let Return = null;
    for(let i = 0; i<Length; i++)
        {
            if(target<=nums[i])
                {
                    Return = i;
                    break;
                }
            
        }
    if(Return == null)
        {
            Return = Length;
        }
    return Return;
};
