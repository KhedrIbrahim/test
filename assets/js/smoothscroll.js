const links = document.querySelectorAll('.mov-link');

const lenis = new Lenis({
    duration: 1.4,
    smooth: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const scrollTargetId = this.getAttribute('ele-to-scroll');
        const targetElement = document.getElementById(scrollTargetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            lenis.scrollTo(targetPosition);
        }
        document.body.classList.remove('nav-active');
    });
});

function handleActiveNavOnScroll() {
    let currentSection = '';

    links.forEach(link => {
        const sectionId = link.getAttribute('ele-to-scroll');
        const section = document.getElementById(sectionId);
        const sectionTop = section.offsetTop - window.innerHeight / 2;
        const sectionBottom = section.offsetTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = sectionId; 
        }
    });

    links.forEach(link => {
        if (link.getAttribute('ele-to-scroll') === currentSection) {
            link.classList.add('active-nav');
        } else {
            link.classList.remove('active-nav');
        }
    });
}

window.addEventListener('scroll', handleActiveNavOnScroll);
