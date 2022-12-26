export function try_catch(effect, Err) {
  return () => {
    try {
      return effect();
    } catch (e) {
      if (e instanceof Error) {
        return Err(e.message);
      }
      if (typeof e === "string") {
        return Err(e);
      }
      return Err(`Unknown error: ${e}`);
    }
  };
}
