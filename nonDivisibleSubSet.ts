/**
 * https://www.hackerrank.com/challenges/non-divisible-subset/problem?isFullScreen=true
 * Given a set of distinct integers, print the size of a maximal subset S of  where the sum of any 2 numbers in S  is not evenly divisible by k.
 * Example
 * S = [19, 10, 12, 10, 24, 25, 22] k = 4 One of the arrays that can be created is S' 0] Another is S' [1] = [19, 22, 24]. After testing al the maximum length solution array has 3 element
 */

console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));

console.log(
  nonDivisibleSubset(
    7,
    [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]
  )
);

function nonDivisibleSubset(divisor: number, values: number[]): number {
  const response = values.filter((value) => {
    const valueCummulation = values.reduce((prev, next) => {
      if (value === next) return prev;
      const add = value + next;
      return prev + add;
    }, 0);

    if (valueCummulation % divisor !== 0) {
      return value;
    }
  });

  return response.length;
}
