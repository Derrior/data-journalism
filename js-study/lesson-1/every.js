'use strict'

const everyFor = function(arr, predicate) {
    let i = 0;
    while (i < arr.size && predicate(arr[i])) {
        i++;
    }
    return i == arr.size;
}

const everyForEach = function(arr, predicate) {
    arr.forEach(x => {
        if (!predicate(x)) {
            return false;
        }
    });
    return true;
}

const everyReduce = function(arr, predicate) {
    return arr.reduce((acc, x) => acc & predicate(x), true);
}

