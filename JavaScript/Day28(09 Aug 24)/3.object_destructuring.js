let animal = {
    name : "Elephant",
    color : "grey",
    version : "god"
}

//without destructuring
console.log(animal);
console.log(animal.name);

//with destructuring
let {name,color,version}=animal;
console.log(name);
console.log(color);
console.log(version);