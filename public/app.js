// const menu = document.querySelector('3mobile-menu')
// const menuLinks = document.querySelector('.navbar__menu')

<<<<<<< HEAD
// const { response } = require("express")

// menu.addEventListener('click', function(){
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// })

// we will have to call this api and display results on the client side page
// fetch("/api").then(res => { return res.json() }).then(data => { 
    // loop through data. everytime through loop is one result. and we choose to show one result or all
// console.log (data) })

function fetchData(){
  fetch("http://localhost:8080/api").then(resp =>{
      const data = response.json();
      console.log(data)

    
  })
}
fetchData()
=======
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

>>>>>>> f7b7c4ec70333827050c90bb008ca9928e567861
