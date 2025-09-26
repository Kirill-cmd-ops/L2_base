function solution(str) {
    const result = [];

    for (let i = 0; i < str.length; i += 2) {
        let pair = str.slice(i, i + 2);
        if (pair.length === 1) {
            pair += '_';
        }
        result.push(pair);
    }

    return result;
}