/*Return the sum of two largest numbers
Input: [32, 66, 80, 120, 45]
Output: 200*/

const input = [32, 66, 80, 120, 45] ;
let sorted_array = [] ;
function sum_of_largest(input_array,numbers_to_add){
    let addition_of_numbers = 0 ;
    numbers_to_add -=1 ;
    
    // sorting the given input
    for(let i = 0; i < input_array.length ; i++){
        for(let j = 0; j <input_array.length ; j++) {
            if(input_array[j] < input_array[j+1]){
                let swap_variable = input_array[j] ;
                input_array[j] = input_array[j+1] ;
                input_array[j+1] = swap_variable ;
            }
        }
    }

    //Sum of largest numbers
    for(let a= 0; a <= numbers_to_add ; a++){
    addition_of_numbers = addition_of_numbers + input_array[a] ;
    }

    console.log("Sum of",numbers_to_add+1,"largest numbers",addition_of_numbers)
}
sum_of_largest(input,2)