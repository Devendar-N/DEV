/*Find the characters that are repeating the most simaltaneously
For example:
charRepeating(“traaainngfornewbie”);
Output: a
// since a has more repeating simaltaneously*/

function findRepeatingCharacter(inputString){
    let mostRepeatingCharacter=[]
    let character ='';
    let characterCount=0;
    let maxcount =0;
    for(let i =0;i<inputString.length;i++){
        if(inputString[i] === character){
            characterCount++;
        }
       else{
            character=inputString[i];
            characterCount=1;
        }
        if(characterCount>maxcount){
            maxcount=characterCount;
            mostRepeatingCharacter=[];
            mostRepeatingCharacter[0]=character;
        }
        else if(characterCount===maxcount){
            let alreadyAdded =false;
            for(let j =0;j<mostRepeatingCharacter.length;j++){
                if(mostRepeatingCharacter[j]===character){
                    alreadyAdded=true;
                    break;
                }
                if(!alreadyAdded){ 
                    mostRepeatingCharacter[mostRepeatingCharacter.length]=character;
                }
            }
        }

    }
    console.log(mostRepeatingCharacter)
}
findRepeatingCharacter("traaainnngfornewwwwbie")