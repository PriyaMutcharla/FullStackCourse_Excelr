function f1(param1,param2,...param3){
    console.log(param1,param2);
    console.log(...param3);
}
f1();
f1(100,200);
f1(100,200,300);
f1(100,200,300,400,500);

console.log("next function output");

function f2(param1,param2,...param3){
    console.log(param1,param2);
    console.log(param3);
}
f2();
f2(10,20);
f2(10,20,30);
f2(10,20,30,40,50);

console.log("next function using function expression");

let f3 = function(p1,p2,...p3){
    console.log(p1,p2);
    console.log(p3);
}
f3();//undefined undefined []
f3(1,2,3); //1 2 [3]
f3(null,null,null);//null null [null]
f3(undefined,undefined,undefined); //undefined undefined [undefined]
f3(10,20); //10 20 []
f3(undefined,2,null); //undefined 2 [null]