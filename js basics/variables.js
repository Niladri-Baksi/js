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
