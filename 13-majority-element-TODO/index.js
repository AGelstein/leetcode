// NOT COMPLETED

// 169. Majority Element
var majorityElement = function(nums) {
    length = nums.length
    currentNum = 0
    elementCount = 0
    mostElementsNumber = 0
    for(let i = 0; i < length; i++) {
        currentNum = nums[i]
        console.log(currentNum)
        console.log(nums.indexOf(currentNum))
        // something not right here
        // length minus the current index of 
        elementCount = 0
        for(let j = 0; j < (length - nums.indexOf(currentNum)); j++) {

            if(currentNum === nums[j]) {
                elementCount += 1
                console.log('we have a match', currentNum)
            }
            console.log(elementCount, 'elementCount')
            
    }
}}

majorityElement([3,2,3])