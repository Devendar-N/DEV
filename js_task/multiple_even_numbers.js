/*Create a function that doubles the even numbers in an array.
Input: [2, 5, 8, 9, 4]
Output: [4, 5, 16, 9, 8]*/

const output = []; // Variable to store the output value
const input_array = [2, 5, 8, 9, 4];
function multiple_even_numbers_in_array(array){    // Function to multiple the even numbers in a array
    for(let i = 0 ; i < array.length ; i++){
    if( array[i] % 2 == 0 ){
        output[i] = array[i] * 2 ;        // Multiplying the even elements
    }
    else{
        output[i] = array[i] ;
    }
}
console.log("Output after multiplying even Numbers in a Array :" , output);      // Displaying the final output
}
multiple_even_numbers_in_array(input_array)