//IIFE
(()=>{
   console.log("Immediate invokable function expression");
})()

//2nd example

let result = ((n1,n2)=>{
    return n1+n2;
})(10,20)
console.log(result);