let navbar = document.querySelector('.mynav .navbar.fixed-top');
window.addEventListener('scroll', () => {
    // console.log(navbar);
    // console.dir(this.scrollY)
    if (this.scrollY>30) {
        navbar.classList.add('navbar-scrolled');
    }
    else{
        navbar.classList.remove('navbar-scrolled');
    }
}
)

 
window.addEventListener('click',function(){
    if(document.querySelector('.offcanvas-start').classList.contains('show')){
        document.querySelector('.navbar_offcanvas_btn .offcanvas_btn_icon::before').classList.add('offcanvas_icon_hover');
        console.log('1')
    }    
    else{
        document.querySelector('.navbar_offcanvas_btn span').classList.remove('offcanvas_icon_hover');
        console.log('2');
    }
})
