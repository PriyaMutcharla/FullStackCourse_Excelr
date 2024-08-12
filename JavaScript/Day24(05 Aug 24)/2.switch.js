
let day = "monday";
let game;
switch (day) {

    case "thursday":
        game = "cricket";
        break;
    case "tuesday":

        game = "tennis";
        break;
    case "wednesday":
        case "monday":
        game = "chess";
        break;
    case "friday":
    
        game = "hockey";
        break;
    case "sunday":
        game = "relax";
        break;
    default:
        console.log("NA");

}
console.log(game);
