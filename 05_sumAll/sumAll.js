const sumAll = function(start, end) {
    if (typeof(start) !== 'number' || typeof(end) !== 'number') {
        return 'ERROR';
    }

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (end < start) {
        let tmp = start;
        start = end;
        end = tmp;
    }

    let result = 0;
    // for (; start <= end; start++) {
    //     result += start;
    // }

    let sumUpToEnd = Math.floor(end / 2 * (end + 1));
    let sumUpToStart = Math.floor((start - 1) / 2 * (start));

    result = sumUpToEnd - sumUpToStart;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
