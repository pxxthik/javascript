let num = [1, 2, 3, 4, 5, 6]
delete num[0]

console.log(num)
console.log(num.length)

let num_more = [7,8,9]

let new_num = num.concat(num_more)
new_num = new_num.concat([10,11,12], [13,14,15])

console.log(new_num)

// sort method
let arr = [1,3,2,5,4,7,6,5,9,8,1111,2222]
// modifies original array
// sorts alphabetically
arr.sort()
console.log(arr)

const compare = (a,b)=>{
  return a-b
}
let unsorted_arr = [1,11,2,22,3,33]
unsorted_arr.sort(compare)
console.log(unsorted_arr)

num.reverse()
console.log(num)

// Splice and Slice
// Splice -> returns the deleted elements
// first parameter index no
// second parameter no of elem to delete
// rest of the parameters to add the elems
let deleted_elems = num.splice(2,4,1001,1002,1003)
console.log(num)
console.log(deleted_elems)

// Slice
console.log("slice method")
console.log(num)

console.log(num.slice(1,5))