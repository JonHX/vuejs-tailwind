/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // result to zero
    let result = 0

    // Iterate through each character in the string
    // If the current symbol is smaller than the next symbol, 
    // subtract its value from the result (e.g., IV -> 4, where I < V, so 5 - 1).
    // Otherwise, add its value to the result.
    s.split("").forEach((symbol, i) => {
        if ( map[symbol] < map[s[i + 1]]) result -= map[symbol]
        else result += map[symbol]
    })

    return result
};


/**
 * @param {number} num
 * @return {string}
 */

const M = { 
    "M": 1000, 
    "CM": 900,
    "D": 500,
    "CD": 400, 
    "C": 100, 
    "XC": 90,
    "L": 50, 
    "XL": 40,
    "X": 10,
    "IX": 9, 
    "V": 5, 
    "IV": 4,
    "I": 1
}

var intToRoman = function(num) {
    let result = ''
   Object.entries(M).forEach(([numeral, value]) => {
       result += numeral.repeat(Math.floor(num / value))
       num %= value
   })
   return result
};
