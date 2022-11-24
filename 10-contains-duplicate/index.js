// 217. Contains Duplicate
var containsDuplicate = function(nums) {
    const sortedArray = nums.sort(((a,b) => a-b))
    for (let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i] === sortedArray[i+1]) {
            return true
        }
    }
    return false
}
containsDuplicate([1,2,3,1])