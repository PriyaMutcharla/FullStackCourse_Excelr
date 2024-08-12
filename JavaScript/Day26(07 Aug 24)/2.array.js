let array1=[10,50,40,30,60,70];
console.log(array1);

//by using for loop we can iterate the array elements
console.log("using for loop");
for(i=0;i<=2;i++){
    console.log(array1[i]);
}

//2nd way --> using 'for of loop'
console.log("using for of loop");
for(i of array1){
    console.log(i);
}

//3rd way --> using 'for in loop'
console.log("using for in loop");
for(j in array1){
    // console.log(i); //it will print the index of the elements
    console.log(array1[j]); //it will print the array 
}

//array destructuring
console.log("array destructiong");
let[a,b,c,...d]=array1;
console.log(a);
console.log(b);
console.log(c);
console.log("print remaining array elements by using rest operator");
console.log(...d); //rest operator

let[s,...t]=array1;
console.log(s); //10
console.log(...t);//all left elements

let [...z]=array1;
console.log(...z);//10 50 40 30 60 70

//we can pass single string value by using 'new' but we cannot pass single number
let array2 = new Array("Bhagi"); 
console.log(array2);

let array3 = Array.of("hi","hello");
console.log(array3);

let array4=Array.of(123);
console.log(array4);
let array5=Array.of(1);
console.log(array5);