let navbar = document.querySelector('.mynav .navbar.navbar-expand-md');
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
