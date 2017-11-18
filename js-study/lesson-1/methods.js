'use strict'

const mapFor = function(array, func) {
    processed = [];
    processed.size = array.size;
    for (var i = 0; i < array.size; i++) {
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

