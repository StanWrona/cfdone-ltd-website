//Temp in Kelvin
const kelvin = 0;
//Temp in Celsius
const celsius = kelvin - 273;
//Temp in Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Temp in Fahrenheit rounded to integer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
const newton = Math.floor(celsius * (33/100));
console.log(newton)