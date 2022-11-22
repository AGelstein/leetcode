// 136. Single Number
var singleNumber = function(nums) {
    let uniques = []
    let number
    for (var i = 0 ; i < nums.length; i++) {
        let number = nums[i]
        console.log(number)
        // gotta write a check to see if it's in uniques

        uniques.push(number)

        // console.log(number, 'number to compare')
        // console.log(matchingNumber, 'index')

        // var matchingNumber = nums.indexOf(number)

        // push only unique numbers to the array
        // if you find they are not unique remove them from the array

        // for (var j = i ; j < nums.length; j++) {
        //     console.log('inner compare')
        //     let v = number
        // }
        
        // pick the number and store it
        // iterate through and keep doing this until we find a unique number


    }

    return number
};

singleNumber([2, 2, 1])