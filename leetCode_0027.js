/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let Length = nums.length;
    for(let i = 0; i<Length; i++)
    {
        if(nums[i] == val)
        {
            nums.splice(i,1);
            i--;
        }
    }
};
