/**
 * Calcule la médiane d'un tableau de nombres.
 * @param {number[]} arr - Le tableau de nombres.
 * @returns {number} La médiane du tableau.
 */

function median(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

export default median;