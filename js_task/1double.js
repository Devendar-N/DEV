/*Create a function that doubles the even numbers in an array.
Input: [2, 5, 8, 9, 4]
Output: [4, 5, 16, 9, 8]*/
const output=[];
const input_array=[2, 5, 8, 9, 4];
function multiple_even_numbers_in_array(){
    for(let i=0;i<input_array.length;i++){
    if(input_array[i]%2==0){
        output[i]=input_array[i]*2;
    }
    else{
        output[i]=input_array[i];
    }
    manual_index++;
}
console.log("Output after multiplying even Numbers in a Array :",output);
}
multiple_even_numbers_in_array()