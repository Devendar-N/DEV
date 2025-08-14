/*2. Group names according to the initial character
Input: ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
Output
["arun", "aadhir", "aariketh"]
["balu"]
["cathy"]
["krish", "kamal"]*/

let input = ["arun", "balu", "cathy", "krish", "Aadhir", "aariketh", "kamal"]
function groupNamesByInitialLetter(inputNames){ 

    //check the input
    if( isNaN(inputNames) !== true || typeof(inputNames) === 'string'){
        console.log("Invalid input") ;
    }
    else if( inputNames.length == 0){
        console.log("Empty array.!")
    }
    else{
        let groupedNames = {} ;   
        for(let i = 0; i < inputNames.length; i++){
            let  currentName ;
            //console.log( typeof currentName)
            let initialCharacter ='' ;
            currentName = inputNames[i] ;
            initialCharacter = currentName[0] ;
            //initialCharacter = initialCharacter.toLowerCase() ;
        
            // creating a group to store names in same letter
            if(groupedNames[initialCharacter] === undefined){
                groupedNames[initialCharacter] = [] ;
            }
            // save the created group
            let currentGroup ;
            currentGroup = groupedNames[initialCharacter] ;
            //to find the undefined value in currentGroup
            let index = 0 ;
            while( currentGroup[index] != undefined){
                index++ ;
            }
            // adding the names to created groups
            currentGroup[index] = currentName ;
        }
        console.log(groupedNames) ;
    }
}
groupNamesByInitialLetter(input)