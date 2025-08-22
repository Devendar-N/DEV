// // const vehicles = [
// //   { type: 'cycle', weightCapacity: 1},
// //   { type: 'bike', weightCapacity: 5 },
// //   { type: 'auto', weightCapacity: 20 },
// //   { type: 'ace', weightCapacity: 50 },
// //   { type: 'tempo', weightCapacity: 100 }
// // ];

// // const parcels = [
// //   { location: 'velachery', weight: 30 },
// //   { location: 'madipakkam', weight: 17 },
// //   { location: 'sholinganallur', weight: 240 }
// // ];

// // for (let p = 0; p < parcels.length; p++) {
// //   let remaining = parcels[p].weight;
// //   const usedVehicles = {};

// //   for (let v = vehicles.length-1; v >=0; v--) {
// //     const capacity = vehicles[v].weightCapacity;
// //     let count = 0;

// //     // Keep subtracting capacity until remaining is less than capacity
// //     while (remaining >= capacity) {
// //       remaining -= capacity;
// //       count++;
// //     }

// //     if (count > 0) {
// //       usedVehicles[vehicles[v].type] = count;
// //     }
// //   }

// //   console.log(`📍 ${parcels[p].location} (${parcels[p].weight}kg):`);
// //   for (const type in usedVehicles) {
// //     console.log(`  - ${type}: ${usedVehicles[type]} vehicle(s)`);
// //   }
// //   console.log(`  ✅ Total vehicles: ${Object.values(usedVehicles).reduce((a, b) => a + b, 0)}\n`);
// // }
// //Write a elegant solution for the below Acceptance Criteria. Import the json into your js file and start working. Please note that the function you write is generic and the edge cases covered.
// // Find the country which has the highest income.
// // Find the country which has the combined highest income
// // Get all the users info (complete info) who has the email which ends with .gov
// // Find the country name which has the maximum combined income for Female
// // You have to complete the solutions by 7 pm and it should get reviewed after. I should have got the PR then
// // Write a program to get paginated result from the json -  getPaginatedResult(pageNumber, pageSize);
// // For example getPaginatedResult(2, 20) will return result from 21-40 from the json
// const userData = require('./users-db.json');
// function findHighestIncomeWithCountry(data) {
//     let highestIncome = 0;
//     let countryWithHighestIncome;
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].income > highestIncome) {
//             highestIncome = data[i].income;
//             countryWithHighestIncome = data[i].country;
//         }
//     }
//     console.log("Country :", countryWithHighestIncome, "\nIncome:", highestIncome);
// }
// findHighestIncomeWithCountry(userData);
// function findCombinedHighestIncome(data) {
//      let incomeByCountry = {};
//     let combinedHighestIncome = "";
//     let highestIncome = 0;
//     let countryWithHighestIncome;
//     for (let j = 0; j < data.length; j++) {
//         let country = data[j].country;
//         let income = data[j].income;
//         if (!incomeByCountry[country]) {
//             incomeByCountry[country] = 0;
//         }
//         incomeByCountry[country] += income;
//         if (incomeByCountry[country] > highestIncome) {
//             highestIncome = incomeByCountry[country];
//             countryWithHighestIncome = country;
//         }
//     }
//     console.log(combinedHighestIncome);
//     console.log("Combined income for each country:", incomeByCountry);
//     console.log("Combined highest income : ", highestIncome);
//     console.log("Country which has combined highest income:", countryWithHighestIncome);
// }
// findCombinedHighestIncome(userData);
// function findSpecificEmail(data){
//     let governmentEmail = [];
//     for (let k = 0; k < data.length; k++) {
//         let email = data[k].email;
//         if (email[email.length - 1] == "v" && email[email.length - 2] == "o" && email[email.length - 3] == "g" && email[email.length - 4] == ".") {
//             governmentEmail.push(email);
//         }
//     }
//     console.log("Government EmailId :", governmentEmail);
// }
// findSpecificEmail(userData);
// function findHighestFemaleIncomeWithCountry(data){
//     let femaleCountryIncome = {};
//     let highestFemaleIncome = 0;
//     let countryWithFemaleHighestIncome = "";
//     for (let j = 0; j < data.length; j++) {
//         let country = data[j].country;
//         let income = data[j].income;
//         let gender = data[j].gender;
//         if (gender == 'Female') {
//             if (!femaleCountryIncome[country]) {
//                 femaleCountryIncome[country] = 0;
//             }
//             femaleCountryIncome[country] += income;
//             if (femaleCountryIncome[country] > highestFemaleIncome) {
//                 highestFemaleIncome = femaleCountryIncome[country];
//                 countryWithFemaleHighestIncome = country;
//             }
//         }
//     }
//     console.log("Combined female income for each country:", femaleCountryIncome);
//     console.log("Highest female income : ", highestFemaleIncome);
//     console.log("Country which has combined highest female income : ", countryWithFemaleHighestIncome);
// }
// findCombinedHighestIncome(userData);
// function getPaginatedResult(data,pageNumber,pageSize){
//     let start = (pageNumber - 1) * pageSize;
//   let end = start + pageSize;
//   let paginatedPage = [];
//   for (let i = start; i < end && i < data.length; i++) {
//     paginatedPage.push(data[i]);
//   }
//   console.table(paginatedPage);
// }
// getPaginatedResult(userData,2,20);

