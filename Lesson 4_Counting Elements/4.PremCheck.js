// A non-empty array A consisting of N integers is given.
//
// A permutation is a sequence containing each element from 1 to N once, and only once.
//
// For example, array A such that:
//
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:
//
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.
//
// The goal is to check whether array A is a permutation.
//
// Write a function:
//
// function solution(A);
//
// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.
//
// For example, given array A such that:
//
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.
//
// Given array A such that:
//
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.
//
// Assume that:
//
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].
// Complexity:
//
// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N) (not counting the storage required for input arguments).

================================================================== 

function solution(A) {
  var sum = 0;
  var numbers = {};

  for (var i = 0; i < A.length; i++) {
    var a = A[i];
    sum += a;
    if (numbers[a] === 1) {
      return 0;
    } else {
      numbers[a] = 1;
    }
  }

  var n = A.length;
  var sum_n = (n * (n + 1)) / 2;
  var difference = sum_n - sum;

  if (difference !== 0) 
    return 0;
  
  return 1;
}
