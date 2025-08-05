/*3. Problem: Create a function that returns the second largest number in an array.
Input: [1, 45, 32, 76, 23]
Output: 45*/
const input = [1, 45, 32, 76, 23]
function finding_second_largest_number(number){  //Function to find second largest largest number
    const length_of_number = number.length
    for(let i = 0; i < length_of_number ; i++) {  // Outer loop
        for(let j = 0 ; j < length_of_number ; j++){   // Inner loop
            if(number [j] < number [j+1]){
                // If current element is smaller then swap next element
                let temporary = number[j] ;
                number[j] = number[j + 1] ;
                number[ j + 1] = temporary ;
            }
        }
    }
    console.log("The second largest number is = ", number[1] ) ;  // Display the output
}
finding_second_largest_number(input)