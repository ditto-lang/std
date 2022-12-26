/**
 * @type {StringMap<any>}
 */
export const empty_impl = {};

/**
 * @template A
 * @template B
 * @param {StringMap<A>} sm
 * @param {string} key
 * @param {(value: A) => B} Just
 * @param {B} Nothing
 * @returns {B}
 */
export function get_impl(sm, key, Just, Nothing) {
  const value = sm[key];
  return value !== undefined ? Just(value) : Nothing;
}

/**
 * @template T
 * @param {StringMap<T>} sm
 * @param {string} key
 * @param {T} value
 * @returns {StringMap<T>}
 */
export function insert_impl(sm, key, value) {
  return { ...sm, [key]: value };
}

/**
 * @template T
 * @param {StringMap<T>} sm
 * @returns {readonly string[]}
 */
export function keys_impl(sm) {
  return Object.keys(sm);
}

/**
 * @template T
 * @typedef {Readonly<Partial<Record<string, T>>>} StringMap
 */
