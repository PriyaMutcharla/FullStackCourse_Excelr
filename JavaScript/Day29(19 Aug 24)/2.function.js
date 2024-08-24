//rest parameter in function :
//only one rest parameter for each function
//rest parameter always should be in last position
//it will convert parameters into an array
let f3 = (...param1)=>{
    console.log(param1);
}
f3();//[]
f3(10,20);
f3(10);
f3(10,"sheela",true,"mala");
f3(null,null);
f3(undefined);
console.log(typeof f3);

//function f4(...param1,...param2)
//error : A rest parameter must be last in a parameter list.

function f5(param1,...param2){
    console.log(param1);
    console.log(...param2);
}
f5(10);
f5(10,20,30);
f5(null,undefined);
console.log(typeof f5);