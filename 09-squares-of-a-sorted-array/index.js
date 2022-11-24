//Squares of a Sorted Array
var sortedSquares = function(nums) {
    let squaredArray = []
    for(let i = 0; i < nums.length; i++) {
        squaredArray.push(Math.pow(nums[i] ,2))
    }
    return squaredArray.sort(((a,b) => a-b))
}
sortedSquares([-4,-1,0,3,10])