// 2404. Most Frequent Even Element

var mostFrequentEven = function(nums) {
    // make new array with only evens or return -1
    let evenArray = []
    let currentEvenNumber = 0
    let currentBiggestAmount = 0
    let frequency = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            evenArray.push(nums[i])
        }
    }
    const sortedArray = evenArray.sort(((a,b) => a-b))

    for(let j = 0; j < sortedArray.length; j++) {
        frequency = 0
        currentEvenIndex = j
        for(let i = currentEvenIndex; i < sortedArray.length; i++) {
            if(sortedArray[currentEvenIndex] == sortedArray[i]) {
                frequency += 1
            }
        }
            if(frequency > currentBiggestAmount)
            {
                currentBiggestAmount = frequency
                // need to set a global var for the actual number associated with the frequency
            }
            console.log(currentBiggestAmount, 'currentBiggestAmount')
        }

    // most frequent even element
    // if there's a tie return the smallest one
    // if there is no such element return -1
};

mostFrequentEven([1,2,2,4,4,1,0])