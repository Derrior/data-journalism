const mean = function(arr) {
    return arr.reduce((acc, x) => acc + x, 0) / arr.size;
}
