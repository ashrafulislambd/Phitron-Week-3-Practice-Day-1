const monthlySavings = (payments, livingCost) => {
    if(!Array.isArray(payments)) {
        return "invalid input";
    }
    if(typeof(livingCost) !== 'number') {
        return "invalid input";
    }
    let earnings = 0;
    payments.forEach(value => {
        if(value >= 3000)
            earnings += value * 0.8;
        else
            earnings += value;
    });
    earnings -= livingCost;
    if(earnings >= 0)
        return earnings;
    else
        return "earn more";
}

console.log(monthlySavings([1000, 2000, 2500], 5000));