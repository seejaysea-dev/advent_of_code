/**
 * Assert test results and throw error with given message if the actual and expected don't match
 * @param actual - Result of the method.
 * @param expected - Expected results.
 * @param errMessage - Message to throw if actual != expected.
 * @throws {Error}
**/
export function assert(actual: any, expected: any, errMessage: string) {
  if (actual !== expected) {
    throw Error(errMessage);
  }
}
