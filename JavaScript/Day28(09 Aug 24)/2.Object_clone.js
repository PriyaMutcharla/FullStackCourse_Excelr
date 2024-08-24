const data1 = {
    name : "Bill gates",
    company : "microsoft",
    color : "white",
    head : "USA"
}

//1st way : using spread operator
//This method uses a spread syntax to create shallow copy of the data1 object,
//The properties of data1 are copied inside copy1
const copy1 = {...data1};
console.log(copy1);

//2nd way by using json.parse
//This method involves converting the data1 object to json.string using json.stringify()
//This parsing that json is string back into an object using json.parse()
//This effectively create deep copy of the objects as it create a new object 
//The same properties and values as data it will copy inside in new object

const copy2= JSON.parse(JSON.stringify(data1));
console.log(copy2);


//By using 3rd way we can copy the object
//by using assign() method it will create the shallow copy of the data, it takes 1st empty object {} as
//target and assign the properties of data to it effective create new object copy with the same properties and value

const copy3 = Object.assign({},data1);
console.log(copy3);

//4th way : by using inbuilt method
//structuredclone

const copy4=structuredClone(data1);
console.log(copy4);