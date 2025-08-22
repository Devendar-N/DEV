/*3. Find the sum of even numbers in an array. find all the even numbers in an array and add them
For example
findEvenSum([38, 3, 2, 8, 31])
output:48*/
function findEvenSum(arrayOfNumbers) {
    //check the user input
    if (!Array.isArray(arrayOfNumbers)) {
        console.log("Please enter a non-empty array of numbers.");
        return;
    }
    else {
        let sumOfEvenNumbers = 0;

        for (let i = 0; i < arrayOfNumbers.length; i++) {
            //check if current value is number
            if (typeof arrayOfNumbers[i] !== 'number' || isNaN(arrayOfNumbers[i])) {
                console.log(`Invalid elements at index ${i}:`, arrayOfNumbers[i]);
                continue;
            }
            if (arrayOfNumbers[i] % 2 == 0) {
                sumOfEvenNumbers += arrayOfNumbers[i];
            }
        }
        return "Sum of even numbers in a array:" + sumOfEvenNumbers;
    }
}
findEvenSum([38, 3, 2, 8, 31])