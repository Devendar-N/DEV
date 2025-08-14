/*3. Find the sum of even numbers in an array. find all the even numbers in an array and add them
For example
findEvenSum([38, 3, 2, 8, 31])
output:48*/
function findEvenSum(arrayOfNumbers) {
    if (arrayOfNumbers === undefined || arrayOfNumbers.length === 0) {
        console.log("Please enter the input.Your input must be a array containes number");
    }
    else if (isNaN(arrayOfNumbers) === false) {
        console.log("Invalid input..!.Please enter valid input")
    }
    else {
        let sumOfEvenNumbers = 0;
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            if (arrayOfNumbers[i] % 2 == 0) {
                sumOfEvenNumbers += arrayOfNumbers[i];
            }
        }
        console.log("Sum of even numbers in a array:", sumOfEvenNumbers);
    }
}
findEvenSum([38, 3, 2, 8, 31,'2'])