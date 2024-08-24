function *f1(){
    yield "My";
    yield "Name";
    yield "is";
    yield "Mutcharla";
    yield "Priya Bhagyavi";
}
let iterator = f1();
console.log(iterator.next().value); //My (1st value)
console.log(iterator.next().value); //Name (2nd value)
console.log(iterator.next().value); //is (3rd value)
console.log(iterator.next().value); //Mutcharla (4th value)
console.log(iterator.next().value); //Priya Bhagyavi (5th value)
console.log(iterator.next().value); //Undefined as there is no next value

//2nd example

function *f2(){
    yield 10;
    yield 20;
    yield 30;
    yield *func_three();
    yield 40;
}
function *func_three(){
    yield 100;
    yield 200;
}
let iterator1 = f2();
for(let value of iterator1){
    console.log(value);
}
