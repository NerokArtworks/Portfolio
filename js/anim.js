// PAGE INTRO WHILE LOADING
const body = document.body;
const making = document.getElementById('load__making');
const conLetters = document.getElementsByClassName('home__title')[0];
const hLetters = document.querySelectorAll('.home__title__letter');
const cursor = document.querySelector('.cls-1');
const conLottie = document.querySelector('.con-home-lottie');
const conWCircle = document.querySelector('.con-work-link');
const conAsideImg = document.querySelector('.con-aside-img');
const navItems = document.querySelectorAll('.nav__item');

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
window.addEventListener('load', function () {
    console.log('Loaded');
    // Hide the intro animation
    setTimeout(hideIntro, 2000);
    // Show body and main title
    setTimeout(showContent, 3000);
    setTimeout(loadCursor, 2000);
})

// window.onload = () => {
//     console.log('Loaded');
//     // Hide the intro animation
//     setTimeout(hideIntro, 2000);
//     // Show body and main title
//     setTimeout(showContent, 3000);
//     setTimeout(loadCursor, 2000);
// }

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
    workButtonListeners();
    // Create Event Listeners
    hLetters.forEach(animateHoverLetter);
}

function showContent() {
    body.style.overflowY = "visible";
    conLetters.style.opacity = 1;
    conLottie.style.opacity = 1;

    // Start for each letter title animation
    hLetters.forEach(animateShowLetter);

    // Navbar items animation
    navItems.forEach((item, i) => {
        setTimeout(() => {
            anime({
                targets: item,
                translateY: 0,
                duration: 1500, // Duration and easing don't work for some reason, transition established in css
                easing: 'linear'
            });
        }, i * 1000);
      });
      
    console.log('Scroll alowed');
}

function workButtonListeners() {
    conWCircle.style.opacity = 1;
    console.log('Animando imagen');
    conWCircle.addEventListener('click', () => {
        conWCircle.style.opacity = 0;
        anime({
            targets: conAsideImg,
            width: '100vw',
            duration: 1500,
            easing: 'cubicBezier(1, .2, .2, 1)'
        })

        anime({
            targets: cursor,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(0.770, 0.5, 0, 1.000);',
            duration: 2500
        });
    });
    
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
    let mouseY = e.clientY;
    let mouseX = e.clientX;
     
    cursorRegular.style.transform = `translate3d(${mouseX - 22}px, ${mouseY - 22}px, 0)`;
    // cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
window.addEventListener('mousemove', moveCursor);

LottieInteractivity.create({
    player: '#firstLottie',
    mode: 'scroll',
    container: "#con-lottie",
    actions: [
        {
            visibility:[0, 0.3],
            type: "stop",
            transition: 'onComplete',
            frames: [0]
        },
        {
            visibility: [0.3, 1.0],
            type: "seek",
            transition: 'seek',
            frames: [0, 135]
        }
    ]
});

// Section 1
const s1LineH = document.querySelectorAll('.s1-grid-item');
const s1BLine = document.querySelectorAll('.b-line');
const s1Img = document.querySelector('.s1-con-img');

// for (let i = 0; i < s1BLine.length; i++) {
//     if (i == 0) {
//         s1BLine[i].style.width = 10 + '%';
//     }
//     else s1BLine[i].style.width = i*25 + '%';
// }

s1Img.addEventListener('visible', e => {
    s1Img.style.transform = 'rotateX(0)';
});

function lineHoverAnim(index) {
    let mouseY = window.clientY;
    let mouseX = window.clientX;
    s1LineH[index].style.transform = `skewX(10deg)`;
    if (index == 0) {
        s1BLine[index].style.width = 5 + '%';
    }
    else s1BLine[index].style.width = index*20 + '%';
    if(index == 4) {
        s1BLine[index + 1].style.width = (index+1)*20 + '%';
    }
};

