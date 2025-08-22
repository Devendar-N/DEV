/*Template String Replace
For example:
const string = “Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]“;
replaceTemplateString(string, [["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]])
Output: Numentica is a company focused on delivering high quality code. It is located in Chennai Tamil Nadu 9840164723*/

function replaceTemplateString(templateString, replacementTemplate) {
    if (typeof templateString !== 'string' || templateString.length === 0) {
        return "Check your Input string!.";
    }
    else if (!Array.isArray(replacementTemplate) || replacementTemplate.length === 0) {
        return "Check your replacement tempalte!.";
    }
    else {
        let result = ''; // Store final result

        // loop through each character in templateSting 
        for (let i = 0; i < templateString.length;) {

            // check template String contain keyName
            if (templateString[i] === '#' && templateString[i + 1] === '[') {
                i += 2;   // to skip '#,['
                let keyName = '';
                let bracketFound = false;

                // Find closing bracket
                while(i<templateString.length){
                    if(templateString[i]==='#'){
                    console.error("Invalid template! check your input.");
                    return '';
                    }
                    if(templateString[i] === ']'){
                        bracketFound =true;
                        i++;// skip ']'
                        break;
                    }
                    keyName+= templateString[i++];
                }
                
                let keyNameValue = '';
                //Replace the names to template
                for (let j = 0; j < replacementTemplate.length; j++) {
                    if (replacementTemplate[j][0] === keyName) { 
                        keyNameValue = replacementTemplate[j][1]; 
                        break;
                    }
                }
                //Save the replace names in string
                for (let k = 0; k < keyNameValue.length; k++) {
                    result += keyNameValue[k];
                }
            }
            else if (templateString[i+1] === '[' && templateString[i] !== '#'){
                console.error("Invalid template formate!.");
                return '';
            }
            else if (templateString[i+1] !== '[' && templateString[i] === '#'){
                console.error("Invalid template formate!.");
                return '';
            }
            else {
                result += templateString[i++];
            }
        }
        return result;
    }
}
const string = "Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]";
console.log(replaceTemplateString(string, [["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]]))