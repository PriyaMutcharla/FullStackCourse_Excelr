//default parameter
let f1 = (p1="r1",p2="r2",p3="r3")=>{
    console.log(p1,p2,p3);
}
f1(); //r1 r2 r3
f1(undefined,null,undefined); //r1 null r3
f1(null,null,null); //null null null
f1("hi","hi","hi"); //hi hi hi
f1(undefined,"hi",null); //r1 hi null
f1(1,2,3); //1 2 3
f1(1,2); //1 2 r3