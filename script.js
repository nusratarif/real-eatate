let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}


var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault() //prevent form from autosubmit
    var username = document.getElementById('username').value 
    console.log(username)
    var email = document.getElementById('email').value 
    console.log(email)
})