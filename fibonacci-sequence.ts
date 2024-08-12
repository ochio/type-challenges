/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium

  ### Question

  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Your Code Here _____________ */

// Array *Rep*resentation of number literal; recursive type testing
type Rep<N, A extends any[] = []> = A["length"] extends N ? A : Rep<N, [0, ...A] >
// *Add*ition of two literals by concatenating their representations
type Add<L, R> = [...Rep<L>, ...Rep<R>]["length"]
// *Sub*traction of two literals; recursive type testing
type Sub<L, R, A extends any[] = []> = L extends R ? A["length"] : Sub<L, Add<R, 1>, [0, ...A]>

type Fibonacci<T extends number> = T extends 0 ? 0 : T extends 1 ? 1 : Add<Fibonacci<Sub<T, 2>>, Fibonacci<Sub<T, 1>>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
