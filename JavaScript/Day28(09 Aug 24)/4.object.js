var obj = {
    name : "Teja",
    age : 30
}
Object.defineProperty(obj,'age',{
    writable:false,
    enumerable:true,
});

console.log(obj.age);
obj.age=27;
console.log(obj.age);

for(var val in obj){
    console.log(val);
}

//2nd
var obj1 = {
    name : "Priya",
    age : 28
}
Object.defineProperty(obj1,'age',{
    writable:true,
    enumerable:false,
});

console.log(obj1.age);
obj1.age=25;
console.log(obj1.age);

for(var val in obj1){
    console.log(val);
}