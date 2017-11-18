'use strict'

const filterFor = function(arr, predicate) {
    result = [];
    for (var i = 0; i < arr.size(); i++) {
        if (predicate(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const filterForEach = function(arr, predicate) {
    result = [];
    arr.forEach(x => predicate(x) ? result.push(x) : 0);
    return result;
}

const filterReduce = function(arr, predicate) {
    result = [];
    arr.reduce((acc, x) => {
        if (predicate(x)) {
            acc.push(x);
        }
        return acc;
    }, result)
    return result;
}

