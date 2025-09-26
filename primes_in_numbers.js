function primeFactors(n) {
    let factors = {};
    let divisor = 2;
    let number = n;

    while (number > 1) {
        while (number % divisor === 0) {
            factors[divisor] = (factors[divisor] || 0) + 1;
            number /= divisor;
        }
        divisor++;
    }

    let result = '';
    for (let prime in factors) {
        if (factors[prime] === 1) {
            result += `(${prime})`;
        } else {
            result += `(${prime}**${factors[prime]})`;
        }
    }

    return result;
}