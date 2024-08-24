let obj = {
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
console.log(obj);

//adding the new key and value pair
obj.key4="value4";
console.log(obj);

//deleting the key and value pair
console.log("deleting the key and value pair");
delete(obj.key3);
console.log(obj);

//keys() : it will return keys
console.log("retriving the keys");
console.log(Object.keys(obj));

//values() : it will retrive the values
console.log("retriving the values");
console.log(Object.values(obj));

//entries() : it is used to convert the object into an array
console.log(Object.entries(obj));

//seal() : you can modify existing value
// but we cannot add new pair(key : value)
console.log(Object.seal(obj));
obj.key4="value5";
console.log(obj);
obj.key5="value6";
console.log(obj);

//freeze() : you cannot modify the existing pair
//but we cannot add new key and value pair also
console.log(Object.freeze(obj));
obj.key4="value7";
console.log(obj);
obj.key5="value7";
console.log(obj);

//assign() : it will merge the two objects
let a1 = {
    name1:"mutcharla",
    name2:"priya"
}
let a2={
    name:"bhagyavi"
}
console.log(Object.assign(a1,a2));
