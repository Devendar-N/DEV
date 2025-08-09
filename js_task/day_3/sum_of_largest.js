/*Return the sum of two largest numbers
Input: [32, 66, 80, 120, 45]
Output: 200*/

const input = [32, 66, 80, 120, 45];
function sum_of_largest(userInput,numbersToAdd){
    if(userInput.length === 0){
        console.log("Empty array.!");
    }
    else if(isNaN(userInput) !== true || userInput.length === 1){
        console.log("Invalid input..!")
    }
    else if(userInput.length < numbersToAdd){
        console.log("Need minimum",numbersToAdd,"values. You have only",userInput.length)
    }
    else{
        let sorted = [] ;
        for(let i = 0; i< userInput.length;i++){
            sorted[i] = userInput[i] ;
        }
        let sumOfNumbers = 0 ;
        // sorting the given input
        for(let i = 0; i < sorted.length ; i++){
            for(let j = 0; j <sorted.length ; j++) {
                if(sorted[j] < sorted[j+1]){
                   let swapVariable = sorted[j] ;
                   sorted[j] = sorted[j+1] ;
                   sorted[j+1] = swapVariable ;
                }
            }
        }
        //Sum of largest numbers
        numbersToAdd -=1 ;
        for(let a= 0; a <= numbersToAdd ; a++){
        sumOfNumbers += sorted[a] ;
        }
        console.log("Sum of largest numbers =",sumOfNumbers)
    }
}
sum_of_largest(input,6)