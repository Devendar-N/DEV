/*2. Find sum of multiples
For example
findSum(5, 5) should return 5+10+15+20+25=75
findSum(8, 3) should return 8+16+24=48*/

function findSum(value,multiple){
    let total = 0;
    // check the user input is valid
    if(multiple == undefined || value == ''|| value == undefined || multiple == ''){
        console.log("Invalid input");
    }
    
    else{
        for(let i = 1 ; i<= multiple ; i++){
            total = total+(value*i) ;
        }
        console.log("The output =",total);
    }
}
findSum(8,3)