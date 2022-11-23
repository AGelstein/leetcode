// 136. Single Number
var singleNumber = function(nums) {
    const uniques = {}
    for (let i = 0 ; i < nums.length; i++) {
        let numberKey = nums[i]
        !(numberKey in uniques) ? uniques[numberKey] = 0 : delete uniques[numberKey] 
    }
    return [Object.keys(uniques)[0]]
}

singleNumber([2, 2, 1])