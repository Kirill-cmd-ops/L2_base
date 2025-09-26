function findMissing(sequence) {
    const step = (sequence[sequence.length - 1] - sequence[0]) / sequence.length;

    for (let i = 0; i < sequence.length - 1; i++) {
        const expected = sequence[i] + step;
        if (sequence[i + 1] !== expected) {
            return expected;
        }
    }
}