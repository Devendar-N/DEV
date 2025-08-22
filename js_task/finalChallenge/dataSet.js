/*
Find the country which has the highest income.
Find the country which has the combined highest income
Get all the users info (complete info) who has the email which ends with .gov
Find the country name which has the maximum combined income for Female*/
const jsonData = require('../users-db.json');
function findHighestIncome(userData) {
    let highestIncome = 0;
    let country;
    for (let i = 0; i < userData.length; i++) {
        income = userData[i].income;
        if (highestIncome < income) {
            highestIncome = income;
            country = userData[i].country;
        }
    }
    console.log(`${country} has the highest income ${highestIncome}`);

    return true;
}

function findHighestCombinedIncome(userData) {
    let countyIncome = {};
    for (let i = 0; i < userData.length; i++) {
        if (countyIncome[userData[i].country] === undefined) {
            countyIncome[userData[i].country] = 0;
        }
        countyIncome[userData[i].country] = countyIncome[userData[i].country] + userData[i].income;
    }
    let highestIncome = 0;
    let highestCountry = '';
    for (const country in countyIncome) {
        const income = countyIncome[country];
        if (income > highestIncome) {
            highestIncome = income;
            highestCountry = country;
        }
    }
    console.log(`${highestCountry} has the highest combined income of ${highestIncome}`);
    return true;
}

function findHighestCombaineGenderIncome(userData, gender) {
    let countryFemaleIncome = {};
    for (let i = 0; i < userData.length; i++) {
        if (countryFemaleIncome[userData[i].country] === undefined) {
            countryFemaleIncome[userData[i].country] = 0;
        }
        if (userData[i].gender.toLowerCase() === gender) {
            countryFemaleIncome[userData[i].country] = countryFemaleIncome[userData[i].country] + userData[i].income;
        }
    }
    let highestIncome = 0;
    let highestCountry = '';
    for (const country in countryFemaleIncome) {
        const income = countryFemaleIncome[country];
        if (income > highestIncome) {
            highestIncome = income;
            highestCountry = country;
        }
    }
    console.log(`${highestCountry} has the highest ${gender} combined income of ${highestIncome}`);
    return true
}

function filterDomain(userData, domain) {
    let filteredDomain = [];
    for (let i = 0; i < userData.length; i++) {
        const email = userData[i].email.split(".");
        const userDomain = email[email.length - 1]
        if (userDomain === domain) {
            filteredDomain.push(userData[i]);
        }
    }
    console.table(filteredDomain);
    return true;
}

function getPaginatedResult(userData, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginated = [];
    for (let i = startIndex; i < endIndex && i < userData.length; i++) {
        paginated.push(userData[i]);
    }
    console.table(paginated)
    return true;
}
// function handleEdgeCases(inputData) {
//     for(let i=0;i<inputData.length)
//     findHighestIncome(jsonData);
//     findHighestCombinedIncome(jsonData);
//     findHighestCombaineGenderIncome(jsonData, 'female');
//     filterDomain(jsonData, 'gov');
    getPaginatedResult(jsonData, 2, 15);

//}