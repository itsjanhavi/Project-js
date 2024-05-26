
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        window.scrollTo({
            left: 0,
            top: element.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('nav');
    if (window.scrollY > 400) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        topLink.style.display = 'block';
    } else {
        topLink.style.display = 'none';
    }
});

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    if (window.pageYOffset > 350) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
