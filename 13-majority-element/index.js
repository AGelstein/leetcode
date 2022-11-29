// 169. Majority Element
var majorityElement = function(nums) {
    length = nums.length
    currentNum = 0
    elementCount = 0
    mostElementsNumber = 0
    for(let i = 0; i < length; i++) {
        currentNum = nums[i]
        console.log(currentNum)
        for(let j = currentNum; j < ; j++) {
            if(currentNum === nums[j]) {
                console.log('we have a match')
            }
    }
}}

majorityElement([3,2,3])