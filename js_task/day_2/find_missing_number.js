/*Find the missing numbers in an array
Input: [68, 71, 69, 73]
Output: missing numbers in range [68-73] is 70, 72*/
const input = [68, 71, 69, 73]
const missing_number = [] ;
function find_missing_number(input_array){
    // Sorting the user input in descending order
    for(let a = 0; a < input_array.length ; a++){
        for(let b= 0 ; b < input_array.length ; b++){
            if(input_array[b] > input_array[b+1]){
                let swap_variable = input_array[b] ;
                input_array[b] = input_array[b+1] ; 
                input_array[b+1] = swap_variable ;
            }
        }
    }

    // Finding the samllest and largest value
    const maximum_number = input_array[input_array.length-1];
    const minimum_number = input_array[0]

    // Finding the missing values in user input
    for(let i = minimum_number ; i <= maximum_number ; i++){
        let present_value = false ;
        for(let j = 0 ; j < input_array.length ; j++){
            if( input_array[j] == i){
                present_value = true ; 
                break ;
            }
        }
        if(!present_value){
            missing_number[missing_number.length] = i ;
        }
    }
    // checkin if the input is empty
    if( input_array == 0){
        console.log("Empty array");
    }
    else{
        console.log("Missing numbers in",input_array,"is =",missing_number)
    }
}
find_missing_number(input)