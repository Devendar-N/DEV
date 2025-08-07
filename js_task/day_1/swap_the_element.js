/*4. Problem: Swap the first and last items in an array.
Input: [3, 5, 9, 2, 7]
Output: [7, 5, 9, 2, 3]*/
const input=[3, 5, 9, 2, 7]
console.log("Before Swapping :",input) // Display the given input
function Swap(value){                       
    [value[0],value[value.length-1]]=[value[value.length-1],value[0]]  // Swapping the elements using their index value
    console.log(" After Swapping :",value) // Display the output
}
Swap(input)