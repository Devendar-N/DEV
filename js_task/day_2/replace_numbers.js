/*Replace all numbers in a string with a given character
Input: replaceNumbers("arun@123", "d")
Output: "arun@ddd"*/
let array = [] ;
let output = '' ;
function replace_number(string,character){
    for(let i = 0; i < string.length ; i++){
        array[i] = string[i] ;
        if( array[i] == '0' || array[i] == '1' || array[i] == '2'
            || array[i] == '3' || array[i] == '4' ||array[i] == '5'
            ||array[i] == '6' || array[i] == '7' || array[i] == '8'
            || array[i] == '9'){
           array[i] = character ;
        }
    }
    for( let j = 0; j < array.length ; j++){
        output += array[j] ;
    }
    console.log(output)
}
replace_number()