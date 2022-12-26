/**
 * @template Ordering
 * @param {number} lhs
 * @param {number} rhs
 * @param {Ordering} GT
 * @param {Ordering} EQ
 * @param {Ordering} LT
 * @returns {Ordering}
 */
export function compare_impl(lhs, rhs, GT, EQ, LT) {
  return lhs > rhs ? GT : lhs === rhs ? EQ : LT;
}

/**
 * @param {number} lhs
 * @param {number} rhs
 * @returns {number}
 */
export function add_impl(lhs, rhs) {
  return lhs + rhs;
}

/**
 * @param {number} lhs
 * @param {number} rhs
 * @returns {number}
 */
export function subtract_impl(lhs, rhs) {
  return lhs - rhs;
}

/**
 * @param {number} lhs
 * @param {number} rhs
 * @returns {number}
 */
export function multiply_impl(lhs, rhs) {
  return lhs * rhs;
}

/**
 * @param {number} lhs
 * @param {number} rhs
 * @returns {number}
 */
export function divide_impl(lhs, rhs) {
  if (rhs === 0) {
    // https://tutorial.ponylang.io/gotchas/divide-by-zero.html
    return 0;
  }
  return lhs / rhs;
}

/**
 * @param {number} lhs
 * @param {number} rhs
 * @returns {number}
 */
export function remainder_impl(lhs, rhs) {
  if (rhs === 0) {
    return 0;
  }
  return lhs % rhs;
}

/**
 * @param {number} lhs
 * @param {number} rhs
 * @returns {number}
 */
export function modulo_impl(lhs, rhs) {
  if (rhs === 0) {
    return 0;
  }
  return ((lhs % rhs) + rhs) % rhs;
}

/**
 * @param {number} n
 * @returns {number}
 */
export function negate_impl(n) {
  if (n === 0) {
    // Why would you want negative zero?
    return n;
  }
  return -n;
}

/**
 * @param {number} n
 * @returns {string}
 */
export function to_string_impl(n) {
  return n.toString();
}
