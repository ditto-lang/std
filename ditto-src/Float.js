/**
 * @param {number} n
 * @returns {number}
 */
export function round_impl(n) {
  return Math.round(n);
}

/**
 * @param {number} lhs
 * @param {number} rhs
 * @param {number} tolerance
 * @returns {boolean}
 */
export function is_eq_impl(lhs, rhs, tolerance) {
  // https://dev.to/alldanielscott/how-to-compare-numbers-correctly-in-javascript-1l4i
  return Math.abs(lhs - rhs) <= tolerance;
}
