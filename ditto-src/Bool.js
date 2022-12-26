/**
 * @param {boolean} lhs
 * @param {boolean} rhs
 * @returns {boolean}
 */
export function and_impl(lhs, rhs) {
  return lhs && rhs;
}

/**
 * @param {boolean} lhs
 * @param {boolean} rhs
 * @returns {boolean}
 */
export function or_impl(lhs, rhs) {
  return lhs || rhs;
}

/**
 * @param {boolean} lhs
 * @param {boolean} rhs
 * @returns {boolean}
 */
export function xor_impl(lhs, rhs) {
  return lhs ? !rhs : rhs;
}

/**
 * @param {boolean} x
 * @returns {boolean}
 */
export function not_impl(x) {
  return !x;
}
