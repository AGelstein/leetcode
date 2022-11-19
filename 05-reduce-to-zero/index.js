var numberOfSteps = function(num) {
    var stepCount = 0
    while(num != 0) {
        num % 2 == 0 ? num = num / 2 : num = num - 1
        stepCount += 1
    }
    return stepCount
}

numberOfSteps(123)