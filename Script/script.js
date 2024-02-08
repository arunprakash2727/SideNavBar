document.addEventListener("DOMContentLoaded",()=>{
    const sideNav=document.querySelector('.sidenav');
    const btnNav=document.querySelector('#btn');
    const overlayScreen=document.querySelector('.overlay');

    btnNav.addEventListener('click',()=>{
        sideNav.classList.add('open');
    });

    overlayScreen.addEventListener('click',()=>{
        sideNav.classList.remove('open');
    });
})