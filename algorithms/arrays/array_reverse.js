// arr = [34, 234, 567, 4];
// =>> [4, 567, 234, 34]

const array_reverse_recursion = (arr) => { return arr.length == 0 ? [] : [arr.pop()].concat(array_reverse_recursion(arr))}