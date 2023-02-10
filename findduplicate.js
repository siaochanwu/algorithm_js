/*Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // let map = new Map();

  // for (let i = 0; i < nums.length; i++) {
  //   console.log(nums[i])
  //   if (map.has(nums[i])) {
  //     console.log(true)
  //     return true
  //   } else {
  //     map.set(nums[i], 1)
  //   }
  // }
  // console.log(false)
  // return false

  //set
  const set = new Set(nums);

  if (set.size != nums.length) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
  //空間複雜度高
};

containsDuplicate([1,2,3,4])