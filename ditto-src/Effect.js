/**
 * @template T
 * @param {readonly Effect<T>[]} effects
 * @returns {Effect<readonly T[]>}
 */
export function sequence_impl(effects) {
  return () => effects.map((effect) => effect());
}

/**
 * @template T
 * @callback Effect
 * @return {T}
 */
