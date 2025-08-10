/* Given an array, filter out the invalid items
For example:
filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
Output [“a”, “d”, true, “cd”];*/

function filterInvalidItems(array,invalid){
    let validItems = [] ; // to save valid items
    let index = 0;           // to increase length of invalid_items array
    // check the user input
    if(typeof array !== 'object'){
        console.log("Empty input.Please enter the input.!") ;
    }
    else if(array.length === 0 || invalid.length === 0){
        console.log("Please enter the input or invalid items to remove.")
    }
    else{
        // Filter the items 
        for(let i = 0; i < array.length; i++){
            if( typeof array[i] !== invalid.toLowerCase()){
                validItems[index] = array[i] ;
                index++ ;
            }
        }
        console.log(validItems) ;
    }
}
filterInvalidItems(["a","d",1,true,"cd",33] ,'object')