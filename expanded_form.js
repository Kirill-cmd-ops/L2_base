function expandedForm(num) {
    const numStr = num.toString();
    const parts = [];

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== '0') {
            const zeros = '0'.repeat(numStr.length - i - 1);
            parts.push(numStr[i] + zeros);
        }
    }

    return parts.join(' + ');
}