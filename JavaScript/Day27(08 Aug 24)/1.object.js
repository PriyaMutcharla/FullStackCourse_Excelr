//creating objext by using literals

let Car ={
    name : "BMW",
    color : "white",
    price : "70lakhs",
    rating : "5 star"
}
console.log("By using 1st way literals");
console.log(typeof Car); //object
console.log(Car.price); //70lakhs
console.log(Car);
Car.rating = "4 star"; //updating the existing value
console.log(Car.rating); //4 start
console.log(Car);
Car.average = 75; //adding new data
console.log(Car.average); //75
console.log(Car);

//creating a temporary variable to call the 'object class' using 'keys methos'
//it will give the key data
let key = Object.keys(Car);
console.log(key);

//lly for values
let value = Object.values(Car);
console.log(value);
