# Task
# Write a function to flatten the nesting in an arbitrary list of values.

# Your program should work on the equivalent of this list:

#   [[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []]
# Where the correct result would be the list:

#    [1, 2, 3, 4, 5, 6, 7, 8]

def my_flatten(arr)
  results = []
  arr.each do |item|
    if item.is_a?(Array)
      results.concat(my_flatten(item))
    else
      results << item
    end
  end
  results
end