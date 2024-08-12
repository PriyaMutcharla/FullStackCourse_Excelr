//slice method --> syntax : slice(start index,end index)
//last index never consider, always consider last index-1
//it is used to splits an array into new fragment
//only start index is considered
let arr=[20,30,60,10,30,55,78];
console.log(arr.slice(0,4));
console.log(arr.slice(0,5));
console.log(arr.slice(4,5));
console.log(arr.slice(4,6));
console.log(arr.slice(1,3));


//splice method --> syntax : splice(start index,deleted count, replaced elements)
//it is used to delete an element upto count and deleted element
//can be replaced by new element
//here existed array only updated
let arr2=[10,20,30,40,50,60,70];
console.log(arr2.splice(1,2,"hii","hello"));
console.log(arr2);
console.log(arr2.splice(4,1,'priya','teja'));
console.log(arr2);