const navSlide = () => {
    const burger = document.querySelector(".burger-nav");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")


    burger.addEventListener("click" , () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease-in-out ${index /7 + 0.2}s`
            }
            
        });
    });
}

navSlide();

