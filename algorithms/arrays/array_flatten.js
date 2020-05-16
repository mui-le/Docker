// # Task
// # Write a function to flatten the nesting in an arbitrary list of values.

// # Your program should work on the equivalent of this list:

// #   [[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []]
// # Where the correct result would be the list:

// #    [1, 2, 3, 4, 5, 6, 7, 8]
// 

const myFlatten = (arr) => { return arr.reduce((new_arr, el) => new_arr.concat(Array.isArray(el) ? myFlatten(el) : el),[]); }