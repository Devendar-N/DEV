/*Create a function that doubles the even numbers in an array.
Input: [2, 5, 8, 9, 4]
Output: [4, 5, 16, 9, 8]*/
const Output=[]
const array=[2, 5, 8, 9, 4];
function multiple(){
    array.forEach((value)=>{
    if(value%2==0){
        value=value*2
        Output.push(value)
    }
    else{
        Output.push(value)
    }
});
console.log("Output after multiplying even Numbers in a Array :",Output)
}
multiple()