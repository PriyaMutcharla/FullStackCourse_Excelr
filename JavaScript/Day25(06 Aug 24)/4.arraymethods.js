let arr=[10,'hii',true,'sheela',"kamala"];

//push() : it is used to add the multiple values from last index
arr.push(60,40,80,'meena',"seena");
console.log(arr);

//pop() : it is used to remove the last index (from last index)
console.log(arr.pop());
console.log(arr);

//shift() : it is used to remove the elements from start index
//it will return the deleted element
//note : only single element we can delete
console.log(arr.shift());
console.log(arr);

//unshift() : it is used to add the multiple values from start index
arr.unshift("priya","mutcharla","vizag",89);
console.log(arr);

//reverse() : it is used to reverse as an array element
let arr1=[20,89,'apple','true',true];
arr1.reverse();
console.log(arr1);

//sort() : sorting the array element by using ascending order
//it will check unit wise not as an entire element
let arr2=['aaa',10,20,100,1000,10,11,25,200,2000,20,15,
    80,60,75,96,300,3000,30,"dog","apple","cat","banana"];
    console.log(arr2.sort());

//indexof() : it is used to check the index of an element
//if element is present then return the index of an element
//if not present it will return -1
console.log(arr2.indexOf(100));
console.log(arr2.indexOf("rama"));

//includes() : it is used to check the element is present or not
//return type is boolen
//if it is present then returnstrue or else false
console.log(arr2.includes("prasad"));
console.log(arr2.includes(100));
