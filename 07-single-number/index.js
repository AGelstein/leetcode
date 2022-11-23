// 136. Single Number
var singleNumber = function(nums) {
    const uniques = {}
    let number
    for (var i = 0 ; i < nums.length; i++) {
        let numberKey = nums[i]
        if(!(numberKey in uniques)) {
            uniques[numberKey] = 0;
        } else {
            delete uniques[numberKey] 
        }
    }
    return [Object.keys(uniques)[0]]
}

singleNumber([2, 2, 1])