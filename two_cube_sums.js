function hasTwoCubeSums(n) {
    const solutions = [];
    const maxVal = Math.round(Math.pow(n, 1/3)) + 2;
    
    for (let a = 1; a < maxVal; a++) {
        const a3 = a * a * a;
        if (a3 > n) break;
        
        for (let b = a + 1; b < maxVal; b++) {
            const b3 = b * b * b;
            const sum = a3 + b3;
            
            if (sum > n) break;
            if (sum === n) {
                solutions.push([a, b]);
            }
        }
    }
    
    return solutions.length >= 2;
}