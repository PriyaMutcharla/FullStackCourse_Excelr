//creating object by using new keyword
let baby  = new Object();
//assigning keys and values to the baby object
baby.color = "white";
baby.weight = "4kg";
baby.name = "Bhagi";
console.log("By using new keyword");
console.log(baby);
console.log(baby.name);
//adding new value
baby.fathername = "Prasad";
console.log(baby.fathername);
console.log(baby);

//creating a temporary variable to call the 'object class' using 'keys methos'
//it will give the key data
let key = Object.keys(baby);
console.log(key);

//lly for values
let value = Object.values(baby);
console.log(value);