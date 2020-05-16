# arr = [34, 234, 567, 4];
# =>> [4, 567, 234, 34]
# 
def arr_reverse_recursion(arr)
  return [] if arr.size == 0
  [arr.pop].concat(arr_reverse_recursion(arr))
end