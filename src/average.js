/**
 * Calcule la moyenne d'un tableau de nombres.
 * @param {number[]} arr - Le tableau de nombres.
 * @returns {number} La moyenne du tableau.
 * @throws {TypeError} arr doit être un tableau.
 */

function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export default average;