// Duplicate Zeros
var duplicateZeros = function(arr) {
    let untrimmedArray = []
    let trimmedArray = []
    for(let i = 0; i < arr.length; i++) {
        untrimmedArray.push(arr[i])
        if(arr[i] === 0) {
        untrimmedArray.push(0)
        }
    }
    trimmedArray = untrimmedArray.slice(0, 8)
    console.log(trimmedArray)
    return trimmedArray
};

duplicateZeros([1,0,1,1,1,1,1,1])