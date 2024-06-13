// console.log("Hello Faiz123");
// console.log("Hello Techno students")

// variables
// let message = "The Password Is Incorrect";
// define the variable and assign value to it 
// console.log(message);
// alert(message);

// define variable hello and assign value as aquib
// let hello = "aquib";
// console.log(hello);
// alert(hello)

// var newdata = "haris";
// console.log(newdata);
// alert(newdata)

// let messagebox;
// messagebox = "world";
// messagebox = "hello";
// console.log(messagebox);


// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
// let admin;
// let name;
// name = "HASAN";
// admin = name;/
// alert(admin);

// constants 
// const birthday = "17.01.2004";
// birthday = "10.11.2001";
// console.log(birthday);

// refer URL 
// https://javascript.info/variables

// Data types in js 
// 1.number 
// let n = 123;
// let nf = 12.344;
// alert(nf)

// 2.bigint
// let bigint = 1234567890n;
// console.log(bigint)

// 3.string
// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `${str} ${str} ${str} can embed another`;
// console.log(phrase);
// alert( the result is ${1 + 2} );

//4.boolean
// let isGreater = 4 < 1;
// alert( isGreater );

// 5.null 
// It’s just a special value which represents “nothing”, “empty” or “value unknown”. 
// let age = null;
// console.log(age);

// 6.undefine 
// let data="hasan";
// console.log(data);

// 7.object for more complex data structures.
// 8.symbol for unique identifiers.

// url 
// https://javascript.info/types


// Basic operators 

// addition 
// let apples = "2";
// let oranges = "3";
// alert( apples + oranges );

// 1.arithmatic operator 
// a1 = 20;
// a2 = 30;
// a3 = a1 + a2;
// console.log(a3);
// alert(a3)

// 2.assignment operator 
// a1 = 20;  //a1 = 20 + 30
// a1 += 30;
// console.log(a1);

// let n = 2;
// n = 5;  //now n = 7 (same as n = n + 5)
// n += 2; // now n = 14 (same as n = n * 2)
// console.log(n)

// alert( n ); // 14

// let x = 1;
// x = -x;
// alert( x ); //  unary negation was applied

// console.log(true && false); 
// console.log(true && true); 
// console.log(1 && 0); 
// console.log(1 && 2); 
// console.log("1" && true); 
// console.log("0" && true);


// let z = 1, y = 3;
// alert( y - z ); 

// division  8 / 3
// alert( 8 % 3 ); 


// exponentional 2² 
// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16

// '1' is string ...therefore value is 12
// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// alert(2 + 2 + '1' ); 

// 3.string operator 
// let s = "my" + "string";
// alert(s); // mystring

// 4.increment and decement operator 
// ++x pre-increment ...increment x by 1 then return x 
// x++ post-increment ...return x than increment by 1
// --x pre-decrement ...decrement x by 1 then return x
// x-- post-decrement ...return x than decrement by 1

// let f;
// f = 10;
// console.log(++f);  //11
// console.log(f);     //11

// let g;
// g = 12;
// console.log(g++);  //12
// console.log(g);     //13

// let h;
// h = 10;
// console.log(--h);  //9
// console.log(h);     //9

// let i;
// i = 12;
// console.log(i--); //12
// console.log(i);  //11

// 5.logical operator
// && Logical AND: true if both the operands/boolean values are true, else evaluates to false
// || Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false
// ! Logical NOT: true if the operand is false and vice-versa.


// AND &&
// const a = true, b = false;
// const c = 4;
// console.log(a && a); // true
// console.log(a && b);  // false
// console.log((c > 2) && (c < 2)); // false

// || OR 
// const a = true, b = false, c = 4;
// console.log(a || b); // true
// console.log(b || b); // false
// console.log((c>2) || (c<2)); // true

// ! NOT 
// const a = true, b = false;
// console.log(!a); // false
// console.log(!b); // true

// url 
// https://javascript.info/operators

// 6. comparison operator 
// x=5
// x =="5"  //true
// x === "5" //false

// url 
// https://www.w3schools.com/js/js_comparisons.asp

// 7.condition operator 
// let company = prompt('which company created javascript?');
// if(company == 'nestscape'){
//   console.log("you are right");
// }else{
//   console.log("you are wrong");
// }

// company == 'nestscape' ? console.log("you are right") :  console.log("you are wrong");

// functions 
// url 
// https://javascript.info/function-basics


// Array 
// const fruites = ["Bannana", "Mango", "Orange", "Apple"];
//       index..... 0           1         2         3
// length 4

// Properties of Array
// join()
// The join() method also joins all array elements into a string.
// pop()
// The pop() method removes the last element from an array:
// push()
// The push() method adds a new element to an array (at the end):
// shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// splice()
// The splice() method can be used to add new items to an array:
// concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:
// slice()
// The slice() method slices out a piece of an array into a new array.

// sort()
// reverse()
// URL https://www.w3schools.com/js/js_array_methods.asp

// On Tue, 11 Jun, 2024, 5:27 pm Rayyan Khan, <rayyankhan40000@gmail.com> wrote:
// Show quoted tex