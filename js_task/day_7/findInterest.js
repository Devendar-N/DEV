/*const students = [
  {
    id: 0,
    name: ‘Arun’,
    books: [‘Wings of Fire’, ‘Chakra’],
  },
  {
    id: 1,
    name: ‘Ashok’,
    books: [‘Chakra’, ‘War and Peace’, ‘The Shining’]
  },
  {
    id: 2,
    name: ‘Balu’,
    books: [‘Wings of Fire’, ‘All about Cricket’],
  },
  {
    id: 3,
    name: ‘Cathi’,
    books: [‘Against the wind’, ‘The Shining’, ‘War and Peace’]
  },
];
Find the common interest in books for the students
Output
Wings of Fire - [‘Arun’, ‘Balu’]
Chakra - [‘Arun’, ‘Ashok’]
War and Peace - [‘Ashok’, ‘Cathi’],
All about Cricket- [‘Balu’],
Against the wind- [‘Cathi’]
The Shining - [‘Cathi’, ‘Ashok’]
Find the user who shares most interest with other users.
For example: Ashok since he shares book interest with Arun, Cathi. And also Arun since he shares interest with Balu and Ashok*/

const students = [
  { id: 0, name: 'Arun', books: ['Wings of Fire', 'Chakra'] },
  { id: 1, name: 'Ashok', books: ['Chakra', 'War and Peace', 'The Shining'] },
  { id: 2, name: 'Balu', books: ['Wings of Fire', 'All about Cricket'] },
  { id: 3, name: 'Cathi', books: ['Against the wind', 'The Shining', 'War and Peace'] },
];
function commonInterest(studentsData){
const bookMap = {};
for(let i=0;i<studentsData.length;i++){
  let student = studentsData[i];
  let studentName = student.name;
  let studentBooks = student.books;

  for(let j =0;j<studentBooks.length;j++){
    let eachBook = studentBooks[j];

    if (!bookMap[eachBook]) {
      bookMap[eachBook] = [];
    }
    bookMap[eachBook].push(studentName)     //{Wings of Fire': [ 'Arun', 'Balu' ],}
  }
  
    
}
console.log(bookMap);

let sharedIntrest = [];
//loop through each student
for (let i = 0; i < studentsData.length; i++) {
  let sharedCount = 0;

  // compare with other student
  for (let j = 0; j < studentsData.length; j++) {
    if (i !== j) {

      //loop through books of each student
      let hasCommonBook = false;
      for (let k = 0; k < studentsData[i].books.length; k++) {
        let book = studentsData[i].books[k];

        // compare the book with other student
        for (let l = 0; l < studentsData[j].books.length; l++) {
          if (book === studentsData[j].books[l]) {
            hasCommonBook = true;
            sharedCount++;
            break;       // if the same book is found then brek the loop
          }
        }if(hasCommonBook)break;
        
          
      }      
      
    }
  }
  sharedIntrest.push({ name: studentsData[i].name, sharedCount });
}
console.log(sharedIntrest);
let mostSharedPerson={};
for(let i =0;i<sharedIntrest.length;i++){
  let studentInterest = sharedIntrest[i].sharedCount;
  let maxCount = 0
  if(studentInterest>maxCount){
    maxCount = studentInterest;
  }
  
    mostSharedPerson.push(sharedIntrest[i])
}
console.log(mostSharedPerson,"lkutv")
}
console.log(commonInterest(students))//error