/*Add "@" after each occurrence of character "c" in a string
Input: "cat in the bag"
Output: "c@at in the bag"*/
const input = "Cat in the bag" ;
let convert_array = [] ;
let final_output = '' ;
function adding_symbol(string,letter,symbol){
    string = string.toLowerCase()
    // converting string to array
    for(let i = 0; i < string.length ; i++){
        convert_array[i] = string[i] ;

        //Add symbol near character
        if(convert_array[i] == letter){
           convert_array[i]= convert_array[i]+symbol ;
        }
    }

    //Again converting array to string
    for(let j = 0; j < convert_array.length ; j++){
        final_output += convert_array[j] ;
    }
    console.log(final_output)
}
adding_symbol(input,'c','*')