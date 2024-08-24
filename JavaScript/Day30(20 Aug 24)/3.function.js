//nested function : function inside another function is called as nested function.
console.log("start");
function parent(){
    console.log("This is parent");
    function child(){
        console.log("this is child");
    }
    child();
    console.log("no child...");
}
parent();