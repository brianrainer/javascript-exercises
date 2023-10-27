const fibonacci = function(num) {
    if (isNaN(num)) {
        return 'OOPS';
    }

    num = Number(num);
    if (num < 0) {
        return 'OOPS';
    }
    if (num === 0) {
        return 0;
    }
    if (num < 3) {
        return 1;
    }

    let a = 1;
    let b = 1;
    for (let i = 0; i < num - 2; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
