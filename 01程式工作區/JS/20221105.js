let mynav_active=document.querySelector('.mynav-active');
let mynav_active_toggle_btn=document.querySelector('#navbar-btn');

mynav_active_toggle_btn.addEventListener('click',()=>{
    mynav_active.classList.toggle('show');
    mynav_active_toggle_btn.classList.toggle('active');
    console.log('1');
})

let parallax_img=document.querySelector('.parallax img');
window.addEventListener('scroll',()=>{
    if(window.scrollY>500 && window.screenY<1000){
        
    }
})
