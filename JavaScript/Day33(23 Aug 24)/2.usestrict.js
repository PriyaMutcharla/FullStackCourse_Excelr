//function without use strict

function withoutstrict(){
    x=10;
    console.log(x);
}
withoutstrict(); //10

//function with strict
function withStrict(){
    "use strict"
    let y=20;
    console.log(y);
}
withStrict();