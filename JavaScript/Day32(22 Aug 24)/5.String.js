//string is a group of characters
//anything which is enclosed within the '', "", "''", `` is known as a string

//1st way by using string literal
let str1 = `Krishna`;
console.log(str1);
console.log(typeof str1);

//2nd way by using new keyword
let str2 = new String("Teja");
console.log(str2);

//string can be replaced
str1 = "Radha";
console.log(str1);

//string is immutable type of nature
//we cannot modify the string
let str3 = "punit";
str3[2]='t';
console.log(str3);//string value cannot be updated so, original string is displayed

//template literal in string
let a = 10;
let b = 20;
console.log(`addition of two numbers is ${a+b}`);