const person1 = {
    name : "Priya",
    age : 30
};
const person2 = person1;  //person1 values are assigned to person2 variable
person2.age = person1.age+1; //so here person1 and person2 both values increase by 1 ==>30+1 =31

console.log(person1.age);
console.log(person2.age);
