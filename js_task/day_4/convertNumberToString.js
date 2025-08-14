/*4. Convert number to strings
for example: convertNumberToString(1)
output “one”
convertNumberToString(98)
output “nineeight”*/

function convertNumberToString(numberToConvert) {
    if (typeof numberToConvert !== 'number') {
        return "Invalid input, Please enter a number in input.";
    }
    else if (numberToConvert === undefined) {
        return "Please enter your input.!";
    }
    else if (numberToConvert === 0) {
        return "Zero";
    }
    else {
         let isNegative = false;
         // find that given number is negative
        if (numberToConvert < 0) {
            isNegative = true;
            numberToConvert = -numberToConvert;
        }
        let seperateNumbers = [];
        while (numberToConvert > 0) {
            console.log("num",numberToConvert)
            let digit = numberToConvert % 10; // to find last digit of given number
            seperateNumbers.push(digit);
            numberToConvert = (numberToConvert - digit) / 10;
        }
        //convert to words
        let words = '';
        if (isNegative) {
            words = "minus ";
        }
        for (let i = seperateNumbers.length; i >= 0; i--) {
            let digit = seperateNumbers[i];
            if (digit === 0) words += "Zero ";
            else if (digit === 1) words += "One ";
            else if (digit === 2) words += "Two ";
            else if (digit === 3) words += "Three ";
            else if (digit === 4) words += "four ";
            else if (digit === 5) words += "Five ";
            else if (digit === 6) words += "Six ";
            else if (digit === 7) words += "Seven ";
            else if (digit === 8) words += "Eight ";
            else if (digit === 9) words += "Nine ";
        }
        return words;
    }
}
console.log(convertNumberToString(-779))