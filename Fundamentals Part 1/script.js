
//Class 8
/*
let js = 'amazing';
console.log(40+8+23-10);

console.log('Davi');
console.log(23);

//Class 9

let firstName = 'Davi';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name Conventions
let davi_carvalho = 'DC';
let $function = 29;


let person = 'Vitoria'
let PI = 3.1415

let myFirstJob = 'Coder'
let myCurrentJob = 'teacher'

let job1 = 'programer'
let job2 = 'teacher'

console.log(myFirstJob);

//Class 11

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


//Class 12

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

//Class 13

//Math Operators with Concat
const now = 2040;
const ageRelationship = 2025;
const ageDavi = now - 2002;
const ageVitoria = now - 2006;
console.log(ageDavi, ageVitoria);

console.log('together we have ' + (ageDavi + ageVitoria) / 2 +" years"+" and "+'our relationship have '+ (now - ageRelationship) +' years');

//Assignment Operators
let x = 10+ 5; //15
x += 10; // x= x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

//Copmparison Operator
console.log(ageDavi > ageVitoria); // >, <, >=, <=
console.log(ageVitoria >= 18);

const isFullAge= ageVitoria >= 18;

console.log((now - 2002) > (now - 2006))


// Challenge 1

const massMark = 78
const heightMark = 1.69

const massJohn = 92
const heightJohn = 1.95

const markBmi = 78 / (1.69 * 2)
console.log(markBmi.toFixed(2))

const johnBmi = 92 / (1.95 * 2)
console.log(johnBmi.toFixed(2))

const markHigherBMI = markBmi > johnBmi
console.log(markHigherBMI)


const firstName = 'Davi';
const job = 'Student';
const birthYear= 2002;
const year = 2027;

const davi = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!' ;
console.log(davi); 


//It's more easy to write strings with ` `
const daviNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(daviNew);

console.log(`Just a regular string`);


console.log('String with \n\
    multiple \n\
    lines');

console.log(`String
    multiple
    lines`);
    


const age = 17;

if(age >= 18){
    console.log('Vitoria can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Vitoria is to youg. Wait ${yearsLeft} years 😅 `)
}

const birthYear = 1999;

let century;
if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}
console.log(century)

//Type Conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(Number('Jonas'));
console;log(typeof NaN);

console.log(String(23), 23);


//Type Coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // print 10
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

*/

/*
// Classes 13/05/26

// 5 falsy values: 0, '' , undefined, null, NaN

console;log(Boolean(0));
console;log(Boolean(undefined));
console;log(Boolean('Davi'));
console;log(Boolean({}));
console;log(Boolean(''));

const monmey = 0;

if(money){
    console.log("Don't spend it at all");
} else {
    console;log('You should get a job!');
}

//Console test

let height;
if(height){
    console.log('YAY height is DEFINED');
} else {
    console.log('Height is UNDEFINED');
}

//Equality Operators

const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');

if(age == 18) console.log('You just became an adult :( (looser)');

window.alert('Pick a number bteween 10 and 30')
let favorite = Number(prompt("What's your favorite number?"));

if(favorite > 30) {
    console.log("The number is not among the expected ones. Please try again.")
    window.alert('Please, pick a number between 10 and 30')
    favorite = Number(prompt("What's yout favorite number?"))
}
 if(favorite <= 30) {
    console.log(`Cool, ${favorite} is an amazing number!`)
}


//Boolean Lógic

const hasDriverLincense = true; // A
const hasGoodVision = false; //B

console.log(hasDriverLincense && hasGoodVision);
console.log(hasDriverLincense || hasGoodVision);
console.log(!hasDriverLincense);

// if(hasDriverLincense && hasGoodVision) console.log('Sarah can drive');
// else console.log("Sarah can't drive"); 

const isTired= false; // C
console.log(hasDriverLincense || hasGoodVision || !isTired);

if(hasDriverLincense && hasGoodVision && isTired) console.log('Sarah can drive');
else console.log("Sarah can't drive"); 
*/
