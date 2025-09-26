function longest(arr, n) {
    return arr
        .map((str, index) => ({ str, index }))
        .sort((a, b) => b.str.length - a.str.length || a.index - b.index)
        [n - 1].str;
}