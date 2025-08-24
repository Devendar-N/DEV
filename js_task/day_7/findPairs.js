/*Find number of pairs in an array which has the sum provided as a parameter
For example:
const arr1 = [4, 2, 5, 6, 8, 1];
const sum = 6;
numberOfPairs(arr1, sum);
// Pais that matches are [4, 2] => 6. [5, 1] => 6
So output 2
*/
function numberOfPairs(values, numberOfPirs) {
    if (!Array.isArray(values) || typeof numberOfPirs !== 'number') {
        console.error("Invalid input.Please check your input!.")
    }
    else {
        let pairs = [];
        let pairsCount = 0;

        //finding pairs count 
        for (let i = 0; i < values.length; i++) {
            for (let j = i + 1; j < values.length; j++) {

                if ((values[i] + values[j]) === numberOfPirs) {
                    pairsCount++;
                }
            }
        }
        return "Number of pairs = " + pairsCount;
    }
}
const array = [4, 2, 5, 6, 8, 1];
const sum = 6;
console.log(numberOfPairs(array, sum));