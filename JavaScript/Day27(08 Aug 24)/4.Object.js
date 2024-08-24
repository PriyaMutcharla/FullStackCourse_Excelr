//Object as an array
let cricket = {
    india : [
        {name : "Virat kohli", runs : 75000, matches : 100},
        {name : "rohit sharma", runs : 70000, matches : 101},
        {name : "sky", runs : 40000, matches : 78},
        {name : "hardik", runs : 60933, matches : 87}
    ],
    australia : [
        {name : "warner", runs : 21222, matches : 90},
        {name : "maxwell", runs : 21111, matches : 45},
        {name : "smith", runs : 32212, matches : 33}
    ],
    south_africa : [
        {name : "klassen", runs : 3422, matches : 21},
        {name : "markram", runs : 2223, matches : 33},
        {name : "ABD", runs : 3232, matches :12}
    ]

}
console.log(cricket);
console.log(cricket.australia[0]);
console.log(cricket.india[1].name);
cricket.australia[1].runs=40000;
console.log(cricket.australia[1].runs);
console.log(cricket.australia);
cricket.india[4]={
    name : "msdhoni",
    runs:"20000",
    matches:120
}
console.log(cricket.india[4]);
console.log(cricket.india);
cricket.india[4].wife = "sakshi";

console.log(cricket.india[4].wife);
console.log(cricket.india);
