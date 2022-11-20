var canConstruct = function(ransomNote, magazine) {
    var ransomArray = Array.from(ransomNote)
    var magazineArray = Array.from(magazine)
    for(var i = 0; i < ransomArray.length; i++){ 
        var r = ransomArray[i]
        var matchingIndex = magazineArray.indexOf(r)
        if(matchingIndex == -1) { 
            return false;
        }
        magazineArray.splice(matchingIndex, 1)
    }
    return true;
}

canConstruct("aa", "ab")