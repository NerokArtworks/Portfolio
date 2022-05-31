// PAGE INTRO WHILE LOADING
const body = document.body;
const making = document.getElementById('load__making');
const conLetters = document.getElementsByClassName('home__title')[0];
const hLetters = document.querySelectorAll(".home__title__letter");
const cursor = document.querySelector('.cls-1');

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
    // Hide the intro animation
    setTimeout(hideIntro, 2000);
    // Show body and main title
    setTimeout(showContent, 3000);
    setTimeout(loadCursor, 2000);
}

function loadCursor() {
    anime({
        targets: cursor,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'cubicBezier(0.770, 0.5, 0, 1.000);',
        duration: 2500
    });
}

function enablePointerEvents() {
    activatePointers = true;
    // Create Event Listeners
    hLetters.forEach(animateHoverLetter);
}

function showContent() {
    body.style.overflowY = "visible";
    conLetters.style.opacity = 1;
    // Start title animation for each letter
    hLetters.forEach(animateShowLetter);
    console.log('Scroll alowed');
}

function animateShowLetter(item, index) {
    console.log('sliding');
    anime({
        targets: hLetters[index],
        translateX: 0,
        duration: 1500,
        easing: 'linear'
    })
    // Enable pointer events after 'showing title' animation its finished so users can now hover on it
    setTimeout(enablePointerEvents, 3000);
}

function hideIntro() {
    making.style.opacity = 0;
}

// HOME LETTERS ANIMATION
function animateHoverLetter(item, index) {
    // If true remove letters old transition and activate pointer events
    if (activatePointers) {
        console.log('Pointer Events Enabled');
        hLetters[index].style.transition = 'none';
        hLetters[index].style.pointerEvents = 'all';
    }
    
    // Now the Event Listeners will correctly apply
    hLetters[index].addEventListener('mouseover', (e) => { 
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

// CURSOR
const cursorRegular = document.querySelector('.cursor');

const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
     
    cursorRegular.style.transform = `translate3d(${mouseX - 22}px, ${mouseY - 22}px, 0)`;
    // cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
window.addEventListener('mousemove', moveCursor);
