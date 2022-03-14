const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')

menu.addEventListener("click",function(){
    sidebar.classList.toggle('remove-sidebar')
    container.classList.toggle('expand-contianer')
})