let mynav_active=document.querySelector('.mynav-active');
let mynav_active_toggle_btn=document.querySelector('.navbar a.btn');

mynav_active_toggle_btn.addEventListener('click',()=>{
    mynav_active.classList.toggle('show');
    console.log('1');
})