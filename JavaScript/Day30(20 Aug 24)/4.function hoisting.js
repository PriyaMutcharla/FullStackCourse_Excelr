console.log("hoisting ");
// incase of function declaration hoisting is possible
a1();
function a1(){
    console.log("hoisting is possible incase of function declaration");
}

//function hoisting its not possible
//Error : a1 cannot access before initialization
//so function is not hoisted instead variable is hoisted and assign with dafault value is undefined
//function expression and arrow function its not possible because it will store the function inside variable
a2();
let a2 = ()=>{
    console.log("this is function hoisting");
}