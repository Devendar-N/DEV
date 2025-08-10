/*4. Convert number to strings
for example: convertNumberToString(1)
output “one”
convertNumberToString(98)
output “nineeight”*/

function convertNumberToString(number){
    let isNegative = false;
    if(number<0){
        isNegative = true ;
        number = -number ;
    }
    if(typeof number !== 'number'){
        console.log("Invalid input, Please enter a number in input.");
    }
    else if( number === undefined){
        console.log("Please enter your input.!");
    }
    else if(number === 0){
        console.log("Zero");
    }
    let seperateNumbers = [];
    while( number>0 ){
        let digit = number% 10;
        seperateNumbers.push(digit);
        number = (number - digit)/10 ;
    }
    // Reverse seperateNumbers
    let correctOrder = [];
    for(let i = seperateNumbers.length-1;i >= 0; i--){
        correctOrder.push(seperateNumbers[i]);
    }
    //convert to words
    let words = '';
    if(isNegative){
        words = "minus ";
    }
    
    for(let i = 0; i < correctOrder.length; i++){
        let digit = correctOrder[i];
        if(digit === 0)words += "Zero ";
        else if(digit === 1) words += "One ";
        else if(digit === 2) words += "Two ";
        else if(digit === 3) words += "Three ";
        else if(digit === 4) words += "four ";
        else if(digit === 5) words += "Five ";
        else if(digit === 6) words += "Six ";
        else if(digit === 7) words += "Seven ";
        else if(digit === 8) words += "Eight ";
        else if(digit === 9) words += "Nine ";
    }
    console.log(words);
}
convertNumberToString(-98)