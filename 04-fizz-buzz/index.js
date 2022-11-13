var fizzBuzz = function(n) {
    var results = []
    var divisibleBy3 = function (a) { return (a % 3 == 0) ? true : false }
    var divisibleBy5 = function (a) { return (a % 5 == 0) ? true : false }

    for(var i = 1; i <= n; i++) {
        if (divisibleBy3(i) && divisibleBy5(i)) {
            results.push("FizzBuzz")
        } else if (divisibleBy3(i)) {
            results.push("Fizz")
        } else if (divisibleBy5(i)) {
            results.push("Buzz")
        }
        else {
            results.push(i)
        }
    }
    console.log(results)
    return results
}

fizzBuzz(30)