let  age = [17,18,90,45,67,32,23,45,54];
let fill = age.filter((age)=>{
    return (age>=18 && age<=60);
})
console.log(age);
console.log(fill);