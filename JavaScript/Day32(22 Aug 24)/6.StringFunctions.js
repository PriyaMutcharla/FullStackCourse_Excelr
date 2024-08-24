//length : it will count the length of the string
let str1 = "mala";
console.log(str1.length);

let str2 = "sheela";
console.log(str2.toUpperCase());

let str3 = "KAMALA";
console.log(str3.toLowerCase());

let str4 = "Krishna ravi Teja";
console.log(str4.repeat(5));

let str5 = "vimala";
console.log(str5.indexOf('a')); //always checks the 1st position

let str6 = "munni";
console.log(str6.lastIndexOf('n'));

let str7 = "Sharukh Khan";
console.log(str7.replace("Sharukh","salman"));

let str8 = "amar";
let str9 = "akbar";
let str10 = "antony";
console.log(str8.concat(str9,str10));

//day 33 continuation

//to print the char by providing the index

let str11 = "Priya";
console.log(str11.charAt(3)); //y will be printed

let str12 = "dwarka";
console.log(str12.charCodeAt(0));

//trim : removes the space
let str13 = "   veera   ";
console.log(str13);
console.log(str13.length); //11
console.log(str13.trim()); //removes the space

let str14 = "   Suman";
console.log(str14);
console.log(str14.trimStart());

let str15 = "venkat    ";
console.log(str15);
console.log(str15.trimEnd());

let str16 = "vansh";
console.log(str16.startsWith("S")); //false
console.log(str16.startsWith("V")); //false
console.log(str16.startsWith("v")); //true

let str17 = "modi";
console.log(str17.endsWith("i")); //true
console.log(str17.endsWith("I")); //false
console.log(str17.endsWith("m")); //false

console.log("Hello".concat("world")); //Helloworld

let str18 = "Afreenkammur";
console.log(str18.substr(1,6));

let str19 = "gauri";
console.log(str19.slice(2,5)); //slice means starting index and last index -1 value get printed

let str20 = "vanita";
console.log(str20.split());
console.log(str20.split(""));

console.log("Hello".match(/[a-z]/g));
console.log("Hello".match(/[A-Z]/g));