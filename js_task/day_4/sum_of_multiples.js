/*2. Find sum of multiples
For example
findSum(5, 5) should return 5+10+15+20+25=75
findSum(8, 3) should return 8+16+24=48*/

function findSum(value,power){
    let total = 0;

    // check the user input is valid
    if(power == undefined || value == ''|| value == undefined || power == ''){
        console.log("Invalid input");
    }
    
    else{
        for(let i = 1 ; i<= power ; i++){
            total = total+(value*i) ;
        }
        console.log("The output =",total);
    }
}
findSum(8,3)