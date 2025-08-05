/*3. Problem: Create a function that returns the second largest number in an array.
Input: [1, 45, 32, 76, 23]
Output: 45*/
const input = [1, 45, 32, 76, 23]
function second(){
    const sorted =[...new Set(input)].sort((a,b)=>b-a);  /// "..." spread opreator
    console.log(" The second largest number :",sorted[1])
}
second()