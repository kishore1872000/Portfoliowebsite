/*==================== toggle icon navbar ====================*/

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/


     /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};
/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distace:'80px',
    duration:2000,
    delay:200
 });
 
 ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact', { origin: 'botton' });
 ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p,.about-content', { origin: 'top' });
/*==================== typed js ====================*/
const typed=new Typed('.multiple-text',{
    strings:['gamer','Frontend Developer','React js Developers'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
    });
