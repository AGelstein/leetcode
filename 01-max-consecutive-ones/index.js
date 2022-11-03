var findMaxConsecutiveOnes = function(nums) {
    let largestCount = 0
    let currentCount = 0
      for(var i = 0; nums.length > i; i++) {
        (nums[i] === 0) ? currentCount = 0 : currentCount++
        if (currentCount > largestCount) largestCount = currentCount
      }
  return largestCount
  };

  findMaxConsecutiveOnes([1,1,0,1,1,1])