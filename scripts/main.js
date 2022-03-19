// js modification 1
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 7000;
let slideInterval;
// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
//next slide func
const nextSlide = () => {
        //get current class
        const current = document.querySelector('.show');
        //remove current class
        current.classList.remove('show')
            //check for next slide 
        if (current.nextElementSibling) {
            //add current class to next slide sibling
            current.nextElementSibling.classList.add('show');
        } else {
            slides[0].classList.add('show');
        }
        setTimeout(() => current.classList.remove('current'));

    }
    //prev slide func
const prevSlide = () => {
    //get current class
    const current = document.querySelector('.show');
    //remove current class
    current.classList.remove('show')
        //check for next slide 
    if (current.previousElementSibling) {
        //add current class to next slide sibling
        current.previousElementSibling.classList.add('show');
    } else {
        slides[slides.length - 1].classList.add('show');
    }
    setTimeout(() => current.classList.remove('current'));

}

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}


// js modification 2
const header = document.querySelector('header');
const sectionOne = document.querySelector('.section_1')
const section_container = document.querySelector('.section-container')

const sectionOneOptions = {
    root: this.scrollAreaTarget,
    threshold: 0.99
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('navbar-scrolled')
        } else {
            header.classList.remove('navbar-scrolled')
        }
    })
}, sectionOneOptions);
sectionOneObserver.observe(sectionOne);
sectionOneObserver.observe(section_container);





// js modification 3

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 1

}

const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target)
            }
        });
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});