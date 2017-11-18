'use strict'

const mapFor = function(array, func) {
    processed = [];
    processed.size = array.size;
    for (let i = 0; i < array.size; i++) {
        processed[i] = func(array[i]);
    }
    return processed;
}

const mapForEach = function(array, func) {
    result = [];
    array.forEach((x, i) => result[i] = func(x));
    return result;
}

const mapReduce = function(array, func) {
    result = [];
    array.reduce((arr, x) => {
        arr.push(func(x));
        return arr;
    }, result);
    return result;
}

