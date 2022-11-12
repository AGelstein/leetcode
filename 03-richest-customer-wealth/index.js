var maximumWealth = function(accounts) {
    var maxWealthSoFar = 0;
    accounts.forEach((account) => {
        var currentCustomerWealth = 0
        account.forEach((bank) => {
            currentCustomerWealth += bank
        })
        maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth)
    })
    return maxWealthSoFar
};

maximumWealth([[1,5],[7,3],[3,5]])