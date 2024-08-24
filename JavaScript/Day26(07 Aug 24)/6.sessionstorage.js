console.log("sessionstorage program");
sessionStorage.setItem("username","priya");
sessionStorage.setItem("password","pr@123");
const username=sessionStorage.getItem("username");
console.log("username from session storage is : " + username);