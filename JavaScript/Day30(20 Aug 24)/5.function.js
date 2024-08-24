let display = (p1,p2="light",...p3)=>{
    console.log(p1,p2,p3);
}
display(); //undefined light []
display("light"); //light light []
display(null,null,null); //null null [null]
display("light",undefined,"light"); //light light ['light']
display(10,20,30,40,50); //10 20 [30, 40, 50]
