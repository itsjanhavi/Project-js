const btn = document.querySelector('.switch-btn');
const video = document.querySelector(".video-container");
const preloader = document.querySelector('.preloader');

btn.addEventListener('click', function () {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.play();
    } else {
        btn.classList.remove('slide');
        video.pause();
    }
});

window.addEventListener('load', function () {
    
        preloader.classList.add('hide-preloader');
});

function toggleSwitch() {
    const switchElement = document.querySelector('.switch');
    switchElement.classList.toggle('slide');
}

