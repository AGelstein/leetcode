var runningSum = function(nums) {
    var runningSums = []
    var accumulator = 0
    for(var i = 0; nums.length > i; i++){
        for(j = i; j >= 0; j--) {
            accumulator += nums[j]
        }
        runningSums.push(accumulator)
        accumulator = 0
    }
    return runningSums;    
};

runningSum([1,1,1,1,1]);