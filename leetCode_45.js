/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length == 1) return 0;
    else
    {
        let step = 0;
        let mark;
        for(let i =0; i<nums.length; i++)
        {
            // console.log(`13->i=${i}`);
            if(nums[i]+i >= nums.length-1)
            {
                // console.log("15-if");
                step++;
                return step;
            }
            else
            {
                // console.log(`i=${i}-->22-else`);
                step++;
                let max = 0;
                // console.log(`i=${i} max=${max} step=${step}`);
                for(let j = i+1; j<=i+nums[i]; j++)
                {
                    //console.log(`27->i=${i} j=${j}`);
                    if(j+nums[j] >= max)
                    {
                        max = j+nums[j];
                        mark = j;
                      //console.log(`32->j=${j} max=${max} i=${i}`);
                    }
                }
                i = mark-1;
            }
        }
        return step;
    }
};
