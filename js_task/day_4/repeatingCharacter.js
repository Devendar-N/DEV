/*Find the characters that are repeating the most simaltaneously
For example:
charRepeating(“traaainngfornewbie”);
Output: a
// since a has more repeating simaltaneously*/

function findRepeatingCharacetr(inputString){
    if(typeof inputString !== 'string'){
        console.log("Invalide input!.Please enter the string as input.");
    }
    else if(inputString === 0 || inputString.trim() === 0){
        console.log("Empty string!. please input string");
    }
    else{
        let currentCharacter = '';
        let currentCharacterCount = 0;
        let mostConsecutiveCharacter = '';
        let mostConsecutiveCharacterCount = 0;
        for(let i = 0; i < inputString.length; i++){
            if(currentCharacter === inputString[i]){
                currentCharacterCount++;
            }
            else{
                currentCharacter = inputString[i];
                currentCharacterCount = 1;
            }
            if(currentCharacterCount > mostConsecutiveCharacterCount){
                mostConsecutiveCharacter = currentCharacter;
                mostConsecutiveCharacterCount = currentCharacterCount;
            }
        }
        console.log("The characters that are repeating the most simaltaneously is:",mostConsecutiveCharacter)
    }

}
findRepeatingCharacetr("traaainngfornewbie")