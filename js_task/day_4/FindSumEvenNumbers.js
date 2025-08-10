/*3. Find the sum of even numbers in an array. find all the even numbers in an array and add them
For example
findEvenSum([38, 3, 2, 8, 31])*/
function findEvenSum(userInput){
    if(userInput === undefined || userInput.length === 0 ){
        console.log("Please enter the input.Your input must be a array containes number");
    }
    else if( isNaN(userInput) === false){
        console.log("Invalid input..!.Please enter valid input")
    }
    else{
        let sumEven = 0;
        for(let i = 0; i < userInput.length; i++){
            if(userInput[i]%2 == 0){
                sumEven += userInput[i];
            }
        }
        console.log(sumEven);
    }    
}
findEvenSum()