/*Find the Nth largest number in an array
Input: findLargest([3, 4, 5, 6, 88], 2)
Output: 6*/

function finding_Nth_largest_number(input,Nth_largest_number){
    // sorting the given input using bubble sort algorithm

    const length_of_input = input.length ;
    for(let i = 0; i < length_of_input ; i++){
        for(let j = 0; j < length_of_input ; j++){
            if(input[j] < input[j+1]){
                let swap_variable = input[j] ;
                input[j] = input[j+1] ;
                input[j+1] = swap_variable ;
            }
        }
    }
    const empty_array = isNaN(input[Nth_largest_number-1])
    // Check the Nth Largest Number is valid

    if(Nth_largest_number > length_of_input){
        console.log("There is no",Nth_largest_number,"largest number") ;
    }
    // Check if the user provided the  empty array

    else if( empty_array == true){
        console.log("It is a empty array") ;
    }
    // Display the output

    else{
        console.log("The",Nth_largest_number,"largest value is =",input[Nth_largest_number-1]) ;
    }
}
finding_Nth_largest_number([3, 4, 5, 6, 88,], 2)