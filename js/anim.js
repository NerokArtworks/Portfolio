// PAGE INTRO WHILE LOADING
const body = document.body;
const making = document.getElementById('load__making');
const conLetters = document.getElementsByClassName('home__title')[0];
const hLetters = document.querySelectorAll(".home__title__letter");

// POINTER EVENTS STATE
var activatePointers = false;

anime({
    targets: making,
    rotate: '1turn',
    easing: 'linear',
    duration: 15000,
    loop: true
});

// PAGE LOAD
window.onload = () => {
    console.log('Loaded');
    setTimeout(hideIntro, 5000);
    setTimeout(showContent, 6000);
    setTimeout(enablePointerEvents, 2000);
}

function enablePointerEvents() {
    activatePointers = true;
}

function showContent() {
    body.style.overflowY = "visible";
    conLetters.style.opacity = 1;
    hLetters.forEach(animateShowLetter);
    console.log('Scroll alowed');
    hLetters.forEach(animateHoverLetter);
}

function animateShowLetter(item, index) {
    console.log('sliding');
    anime({
        targets: hLetters[index],
        translateX: 0,
        duration: 1500,
        easing: 'linear'
    })
}

function hideIntro() {
    making.style.opacity = 0;
}

// HOME LETTERS ANIMATION
function animateHoverLetter(item, index) {
    hLetters[index].addEventListener('mouseover', (e) => {
        // if (activatePointers) {
        //     console.log('Pointer Events Enabled')
             hLetters[index].style.transition = 'none';
        //     hLetters[index].style.pointerEvents = 'all';
        // }
        
        anime({
            targets: hLetters[index],
            scaleY: 1.2,
            duration: 800,
            easing: 'easeOutElastic'
        });
    })

    hLetters[index].addEventListener('mouseleave', (e) => {
        anime({
            targets: hLetters[index],
            scaleY: 1,
            duration: 800,
            easing: 'easeOutElastic'
        });
    })
}