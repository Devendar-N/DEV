/*Merge two arrays and sort them from lowest to highest
Input: [1, 4, 6], [2, 5, 3]
Output: [1, 2, 3, 4, 5, 6]*/

const input_array1 = [1, 4, 6] ;
const input_array2 = [2, 5, 3,] ;
let index_value = 0;
let concatenated_array = []
let sorted_array = []
function sort_from_lowest(){

    // Merging user inputs 
    for(let i = 0;i < input_array1.length;i++){
        concatenated_array[index_value] = input_array1[i] ;
        index_value++ ;
    }
    for(let j = 0; j < input_array2.length;j++){
           concatenated_array[index_value] = input_array2[j]; 
            index_value++ ;
        }
     console.log("Merged array :",concatenated_array)

    // checking if the input is empty
    for(let a = 0; a <= concatenated_array.length ; a++){
        let length_of_array = concatenated_array.length ;
       
        if( length_of_array == 0){
            console.log("given arrays are empty.")
        }

        // sorting from lowest to highest
        else {
            
            for(let k =0;k < concatenated_array.length; k++){
                for(let l =0;l < concatenated_array.length; l++){
                    if(concatenated_array[l]>concatenated_array[l+1]){
                        let swap_variable = concatenated_array[l] ;
                        concatenated_array[l] = concatenated_array[l+1] ;
                        concatenated_array[l+1] = swap_variable ;
                    }
                }
            }
        }
    }
    sorted_array = concatenated_array
    console.log("Sorted array :",sorted_array)
}
sort_from_lowest()