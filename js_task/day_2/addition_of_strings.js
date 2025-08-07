/*Calculate the sum of numbers in a comma-separated string
Input: "1.5, 2, 44, 66, 12, 90"
Output: 215.5*/

const input_string = "1.5, 2, 44, 66, 12, 90" ;
let converted_array = [] ;
let swap_variabel = ""
function convert_to_array(input_string){

    // checking if the input is empty
    if( input_string == ' '){
        console.log("Empty string")
    }
    
    else {

        
    // converting string to array
    for(let i = 0;i <= input_string.length ; i++){
        let character = input_string[i] ;
        if(input_string[i] == ',' || input_string[i] == input_string[-1]){

            converted_array[converted_array.length] = swap_variabel ;
            swap_variabel = "" ;
        }
        else{
            swap_variabel += character ;
        }
    }
    let total = 0;
    for(let j =0 ; j < converted_array.length ; j++){

        // converting string value inside a array to number
        let number = parseFloat(converted_array[j])
        total = total + number ;
    }
        console.log("Addition of string :",total)
    }
}
convert_to_array(input_string)