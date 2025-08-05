/*4. Problem: Swap the first and last items in an array.
Input: [3, 5, 9, 2, 7]
Output: [7, 5, 9, 2, 3]*/
const input=[3, 5, 9, 2, 7]
console.log("Before Swapping :",input)
function Swap(){
    [input[0],input[input.length-1]]=[input[input.length-1],input[0]]
    console.log(" After Swapping :",input)
}
Swap()