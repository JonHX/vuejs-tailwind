/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (numerals: string): number => {
    const map: { [key: string]: number } = {
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
    numerals.split("").forEach((symbol, i) => {
        if (map[symbol] < map[numerals[i + 1]]) result -= map[symbol]
        else result += map[symbol]
    })
    return result
};

export default romanToInt