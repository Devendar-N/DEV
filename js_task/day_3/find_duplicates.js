/*3. Find all duplicates in an array
Input: [1, 2, 3, 2, 4, 5, 3, 6]
Output: [2, 3]
(Only the values that appear more than once should be returned, in the order of their first duplicate occurrence)*/

function findDupicates(userInput){
    if(typeof userInput !== 'object'){
        console.log("Invalid input..!,please check your input.")
    }
    else if(userInput.length === 0){
        console.log("Empty array..!")
    }
    else{
    const duplicateValue = [];   // to store duplicate values               
    let duplicateIndex = 0   
    for( let i = 0 ; i < userInput.length ; i++){
        let index = 0 ;
        for( let j = 0; j < userInput.length; j++){

            //to check the element is reapeated in input
            if(userInput[i] === userInput[j]){
                index++ ;
            }
        }

        // check the element is added in duplicate array
        if(index > 1){
            let alreadyAdded = false ;
            for( let k = 0 ; k < duplicateValue.length ; k++){
                //check the element added to duplicate value
                if(  duplicateValue[k] == userInput[i]){
                    alreadyAdded = true ;
                    break ;
                }
            }
            if(!alreadyAdded){
                duplicateValue[duplicateIndex] = userInput[i]
                duplicateIndex++ ;
            }
        }
    }  
console.log("Duplicate values =",duplicateValue) ;
    }
}
findDupicates([1, 2, 3, 2, 4, 5, 3, 6]);