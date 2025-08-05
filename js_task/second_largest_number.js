/*3. Problem: Create a function that returns the second largest number in an array.
Input: [1, 45, 32, 76, 23]
Output: 45*/
const input = [1, 45, 32, 76, 23]
function finding_second_largest_number(number){
    const length_of_number = number.length
    let swapped ;
    do{
        swapped = false;
        for(let i = 0 ; i < length_of_number-1 ; i++){
            if(number [i]< input[i+1]){
                let temporary = number[i] ;
                number[i] = number[i + 1] ;
                number[ i + 1] = temporary ;
                swapped = true ;
            }
        }
    }while(swapped) ;
    console.log( number ) ;
}
finding_second_largest_number("The second largest number = " ,input)