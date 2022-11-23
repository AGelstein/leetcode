function findNumbers(nums) {
    var count = 0;
    var digitCount = 0;
    for(var i = 0; nums.length > i; i++){
        if (nums[i] >= 1) ++digitCount;
        while (nums[i]/ 10 >= 1) {
            nums[i] /= 10;
            ++digitCount;
        }
        if(digitCount % 2 == 0) ++count;
        digitCount = 0
    }
    return count
}

findNumbers([12,345,2,6,7896])