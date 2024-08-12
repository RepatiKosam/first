let username = localStorage.getItem("username");
if(!username){
    username = window.prompt();
    localStorage.setItem("username",username); 
}
document.getElementById("result").textContent = `Hello ${username} !`;
