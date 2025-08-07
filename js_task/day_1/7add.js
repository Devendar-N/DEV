/*8. Problem: Write a function to sum all numbers in an array except the largest.
Input: [10, 20, 30, 40]
Output: 60 (sum of 10 + 20 + 30)*/
const input = [10, 20, 30, 40]
const maxmimum_number= Math.max(...input)// used spread opreator
console.log("The largest Number =",maxmimum_number)
let sum = 0
for(let i =0; i< input.length; i++){
    sum = sum+input[i]
}
console.log("sum of all numbers in an array except the largest Number =",sum-maxmimum_number)