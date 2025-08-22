/*Using javascript fetch , get the results from this API and print the results
https://jsonplaceholder.typicode.com/todos/1*/
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("Error:"+error);
})