/*Find the characters that are repeating the most simaltaneously
For example:
charRepeating(“traaainngfornewbie”);
Output: a
// since a has more repeating simaltaneously*/

function findRepeatingCharacter(inputString) {
    if (inputString.length === 0) {
        console.error("Empty input.Please enter the input");
        return "";
    }
    else if (typeof inputString !== 'string') {
        console.error("Invalid input check your input!.");
    }
    else {
        inputString = inputString.toLowerCase();
        let mostRepeatingCharacter = []
        let character = '';
        let characterCount = 0;
        let maxcount = 0;

        for (let i = 0; i < inputString.length; i++) {
            //check the character is repeating simaltaneously
            if (inputString[i] === character) {
                characterCount++;
            }
            else {
                character = inputString[i];
                characterCount = 1;
            }
            if (characterCount > maxcount) {
                maxcount = characterCount;
                mostRepeatingCharacter = [character];
            }
            else if (characterCount === maxcount) {
                let alreadyAdded = false;

                //check if the character is already added to avoide duplicate
                for (let j = 0; j < mostRepeatingCharacter.length; j++) {
                    if (mostRepeatingCharacter[j] === character) {
                        alreadyAdded = true;
                        break;
                    }
                }
                if (!alreadyAdded) {
                    mostRepeatingCharacter.push(character);
                }
            }
        }
        return mostRepeatingCharacter;
    }
}
console.log(findRepeatingCharacter("traaainnngfornebie"))