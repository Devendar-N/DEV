/*Problem: Write a function to count the number of vowels in a string.
Input: "numentica ui"
Output: 6*/

const input = "numentica ui"
let converted_array = []
function convert_to_array(array){   //Function that convert a string to array
    for(let i = 0 ; i < array.length ; i++){
        converted_array[i] = array[i]  // Storing the converted array in output_array variable
    }
}
function count_vowels(value){   // Function that counts number of vowels in given input
    let vowels_count = 0;       
    for(let j = 0 ; j < value.length ; j++){
        if(value[j] == 'a' || value[j] == 'e' || value[j] == 'i' || value[j] == 'o' || value[j] == 'u' ){
            vowels_count += 1 ;    
        }
    }
    console.log('Number of vowels in ', input , ' = ', vowels_count) // Display the output
}
convert_to_array(input)
count_vowels(converted_array)