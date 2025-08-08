/*2. Group names according to the initial character
Input: ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
Output
["arun", "aadhir", "aariketh"]
["balu"]
["cathy"]
["krish", "kamal"]*/

let input = ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
function groupNamesByInitialLetter(input_array){  
    let number = isNaN(input_array)
    let array_length = input_array.length ;
    if( number == false || array_length == 0){
        console.log("Invalid input") ;
    }
    else{
        let grouped_names = {} ;   // to store the group of names
        let  current_name ;        // to store single name
        let first_character ='' ;  // to store first letter of a name
        let current_group ;        // to store group that already created
        // getting first letter of a name 
        for(let i = 0; i < input_array.length; i++){
            current_name = input_array[i] ;
            first_character = current_name[0] ;
            //first_character = first_character.toLowerCase() ;
        
            // creating a group to store names in same letter
            if(grouped_names[first_character] === undefined){
                grouped_names[first_character] = [] ;
            }
            // save the created group
            current_group = grouped_names[first_character] ;
            //to find the undefined value in current_group
            let index = 0 ;
            while( current_group[index] != undefined){
                index++ ;
            }
            // adding the names to created groups
            current_group[index] = current_name ;
        }
        console.log(grouped_names) ;
    }
}
groupNamesByInitialLetter(input)