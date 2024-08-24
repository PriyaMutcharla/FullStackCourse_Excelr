console.log("localstorage program");
localStorage.setItem("username","priya");
localStorage.setItem("password","pr@123");
const username=localStorage.getItem("username");
console.log("username from local storage is : " + username);