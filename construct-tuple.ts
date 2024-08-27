/*
  7544 - Construct Tuple
  -------
  by Lo (@LoTwT) #medium #tuple

  ### Question

  Construct a tuple with a given length.

  For example

  ```ts
  type result = ConstructTuple<2> // expect to be [unknown, unkonwn]
  ```

  > View on GitHub: https://tsch.js.org/7544
*/

/* _____________ Your Code Here _____________ */

type NumberToTuple<
  T extends number,
  U extends unknown[] = [],
> = U["length"] extends T ? U : NumberToTuple<T, [...U, unknown]>;
type Sub<T extends number, U extends number> =
  NumberToTuple<T> extends [...NumberToTuple<U>, ...infer S]
    ? S["length"]
    : never;

type ConstructTuple<L extends number, T extends unknown[] = []> = L extends 0
  ? T
  : ConstructTuple<Sub<L, 1>, [...T, unknown]>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7544/answer
  > View solutions: https://tsch.js.org/7544/solutions
  > More Challenges: https://tsch.js.org
*/
