// 9. Palindrome Number
// @param {number} x
// @return {boolean}
 
 var isPalindrome = function(x) {
    arr = x.toString().split('')
    reversedArr = []
    for(let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    for(let i = 0; arr.length > i; i++) {
        if(arr[i] !== reversedArr[i]) {
            return false
        } 
    }
    return true
};

isPalindrome(-121)