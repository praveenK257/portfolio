// Navbar 
const navBar = $('#navBar')
const navIcon = $('.navIcon')

navIcon.click(function(event){
    $('.nav-right')[0].classList.toggle('expand')
})