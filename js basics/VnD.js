const accountId = 2728; //can't be changed
let accountEmail = "baksiniladri@gmail.com"; //let preferred over var due to issues in block/functional scopes
var accountPassword = "12345";
accountCity = "Kolkata"; //its possible but not preferred
let accountState; //undefined by default
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

//datatypes

//primitives
("use strict"); //treat all js code as newer version
// number : 2^53
// bigint : for bigger integers
// string : ""
// boolean : true/false
// null : standalone value separate from undefined value
// undefined
// symbol : unique

//object

// console.log(typeof <anything>) :returns the type of the required value
console.log(typeof null); //returns object
console.log(typeof undefined); //returns undefined

//refer ecmascript tc39.es or mdn

//DATATYPE CONVERSION
let score = 27;
console.log(typeof score); //returns number

score = "27";
console.log(typeof score); //returns string
let valueInNumber = Number(score); //explicit conversion to number

score = "27abc";
valueInNumber = Number(score); //converts even an alphanumeric string to number
console.log(typeof valueInNumber); //returns number but
console.log(valueInNumber); //returns NaN
// therefore only type converts but on returning the actual value of the variable it gives not a number hence typescript is preferred over javascript\

score = null;
console.log(typeof score); //returns object
valueInNumber = Number(score); //converts even null object to number
console.log(typeof valueInNumber); //returns number but
console.log(valueInNumber); //returns 0

score = undefined;
console.log(typeof score); //returns undefined
valueInNumber = Number(score); //converts even undefined to number or any other type
console.log(typeof valueInNumber); //returns number but
console.log(valueInNumber); //returns NaN

score = true;
console.log(typeof score); //returns boolean
valueInNumber = Number(score); //converts even undefined to number or any other type
console.log(typeof valueInNumber); //returns number but
console.log(valueInNumber); //returns 0 for false and 1 for true

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); //converts to boolean
console.log(booleanIsLoggedIn); //returns true

isLoggedIn = 0;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //returns false

isLoggedIn = Niladri;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //returns true

isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //returns false

let someNumber = 27;
let stringNumber = String(someNumber); //converts to string
console.log(stringNumber); //returns 27 but is string
console.log(typeof someNumber); //returns string
