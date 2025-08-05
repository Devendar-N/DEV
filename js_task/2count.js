/*Problem: Write a function to count the number of vowels in a string.
Input: "numentica ui"
Output: 6*/

const input = "numentica ui"
let output_array=[]
function convert_to_array(array){   //Function that convert a string to array
    for(let i=0;i<array.length;i++){
        output_array[i]=array[i]
    }
}
function count_vowels(value){
    let vowels_count=0;
    for(let j=0;j<value.length;j++){
        if(value[j] == 'a' || value[j] == 'e' || value[j] == 'i' || value[j] == 'o' || value[j] == 'u' ){
            vowels_count += 1;
        }
        else{
            continue;
        }
    }
    console.log('Number of vowels in ',input , '=', vowels_count)
}
convert_to_array(input)// calling the function
count_vowels(output_array)