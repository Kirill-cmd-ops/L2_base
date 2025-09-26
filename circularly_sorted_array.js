function isCircleSorted(arr) {
    let count = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[(i + 1) % n]) {
            count++;
        }
    }

    return count <= 1;
}