/**
 * @template A
 * @param {number} length
 * @param {(i: number) => A} f
 * @returns {readonly A[]}
 */
export function from_impl(length, f) {
  return Array.from({ length }, (_, i) => f(i));
}

/**
 * @template A
 * @template B
 * @param {readonly A[]} array
 * @param {number} i
 * @param {(value: A) => B} Just
 * @param {B} Nothing
 * @returns {B}
 */
export function get_impl(array, i, Just, Nothing) {
  const value = array[i];
  return value !== undefined ? Just(value) : Nothing;
}

/**
 * @template A
 * @template B
 * @param {readonly A[]} array
 * @param {(i: number, element: A) => B} f
 * @returns {readonly B[]}
 */
export function map_with_index_impl(array, f) {
  return array.map((element, i) => f(i, element));
}

/**
 * @template A
 * @param {readonly A[]} array
 * @param {(lhs: A, rhs: A) => number} compareFn
 * @returns {readonly A[]}
 */
export function sort_impl(array, compareFn) {
  return [...array].sort(compareFn);
}

/**
 * @template A
 * @template B
 * @param {readonly A[]} array
 * @param {B} initial
 * @param {(acc: B, element: A) => B} reducer
 * @returns {B}
 */
export function foldl_impl(array, initial, reducer) {
  let acc = initial;
  for (const element of array) {
    acc = reducer(acc, element);
  }
  return acc;
}

/**
 * @template A
 * @template B
 * @param {readonly A[]} array
 * @param {B} initial
 * @param {(element: A, acc: B) => B} reducer
 * @returns {B}
 */
export function foldr_impl(array, initial, reducer) {
  let acc = initial;
  const reversed = [...array].reverse();
  for (const element of reversed) {
    acc = reducer(element, acc);
  }
  return acc;
}

/**
 * @template A
 * @param {readonly A[]} array
 * @param {A} element
 * @returns {readonly A[]}
 */
export function push_start_impl(array, element) {
  return [element, ...array];
}

/**
 * @template A
 * @param {readonly A[]} array
 * @param {A} element
 * @returns {readonly A[]}
 */
export function push_end_impl(array, element) {
  return [...array, element];
}

/**
 * @template A
 * @param {readonly A[]} array
 * @returns {number}
 */
export function length_impl(array) {
  return array.length;
}

/**
 * @template A
 * @param {readonly (readonly A[])[]} arrays
 * @returns {readonly A[]}
 */
export function concat_impl(arrays) {
  const [head, ...rest] = arrays;
  if (head === undefined) {
    return [];
  }
  return head.concat(...rest);
}
