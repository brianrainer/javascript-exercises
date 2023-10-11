const removeFromArray = function(arr, ...elements) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        for (; j < elements.length; j++) {
            if (arr[i] == elements[j] && typeof(arr[i]) == typeof(elements[j])) {
                break;
            }
        }
        if (j == elements.length) {
            result.push(arr[i]);
        }
    }    

    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
