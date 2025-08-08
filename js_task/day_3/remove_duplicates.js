/*3. Find all duplicates in an array
Input: [1, 2, 3, 2, 4, 5, 3, 6]
Output: [2, 3]
(Only the values that appear more than once should be returned, in the order of their first duplicate occurrence)*/

const input = [1, 2, 3, 2, 4, 5, 3, 6] ;
function findDupicates(input_array){
    const duplicate_array = [];
    let already_added = false ;
    for( let i = 0 ; i < input_array.length ; i++){
        for( let j = 0 ; i < input_array.length ; j++){
            if(input_array[i] == input_array[j]){
                for( let k = 0 ; k < duplicate_array.length ; k++){
                    if( duplicate_array[k] == input_array[i]){
                        already_added = true ;
                        break ;
                    }
                }
            }
        }
    }
}