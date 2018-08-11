/**
 * @name compose
 * @param {...fns} Array
 * @returns Function
 * @since 1.0.0
 * @section
 * @example
 */
const compose = (...fns: Function[]) => {
  return fns.reduce((f, g) => (...args: any[]) => f(g(...args)));
};

export default compose;
