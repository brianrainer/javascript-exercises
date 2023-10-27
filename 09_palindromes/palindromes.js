const palindromes = function (word) {
    // sanitize
    let sanitize = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    let isPalindrome = true;
    for (let i = 0; i < sanitize.length; i++) {
        if (sanitize[i] !== sanitize[sanitize.length-1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
