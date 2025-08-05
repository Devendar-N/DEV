/*Problem: Write a function to count the number of vowels in a string.
Input: "numentica ui"
Output: 6*/

const input = "numentica ui"
const array = input.split("")
function convert(){
    const vowels = ['a','e','i','o','u']
    let count = 0
    const length=array.length
    for(let i=0; i < length;i++){
        if(vowels.includes(array[i])){
             count++
    }
}
    console.log("The number of vowels in a string :",count)
}
convert()