import fc from "fast-check";

export const string_impl = fc.string();

export const int_impl = fc.integer();

export const int_bounded_impl = fc.integer;

export function test_impl(fuzzer, test_fn, Ok, Err) {
  return () => {
    const result = fc.check(fc.property(fuzzer, (a) => test_fn(a)));
    return result.failed
      ? Err(`property failed for ${result.counterexample}`)
      : Ok;
  };
}
