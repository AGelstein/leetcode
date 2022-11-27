// Duplicate Zeros
var duplicateZeros = function(arr) {
    let numZeros = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            arr.splice(i, 0, 0)
            numZeros++
            i++
        }
    }
    arr = arr.slice(0, -numZeros)
    console.log(arr)
}

duplicateZeros([1,0,2,3,0,4,5,0])