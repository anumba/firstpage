const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav');
const close = document.querySelector('.close-menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.add('hide');
    nav.classList.toggle('visible');
    close.classList.remove('hide');
    

})

close.addEventListener ('click', ()=>{
    close.classList.add('hide');
    hamburger.classList.remove('hide');
    nav.classList.toggle('visible');


})




 