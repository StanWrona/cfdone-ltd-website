const myAge = 30;
//This is Stan's age
let earlyYears = 2;
//Early years
earlyYears *= 10.5;
let laterYears = myAge - 2;
//Later years
laterYears *= 4;
console.log(earlyYears, laterYears);
const myAgeInDogYears = earlyYears + laterYears;
//Dog's age calculated based on Stan's age
const myName = 'Stan'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)