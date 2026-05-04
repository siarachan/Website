/* --- 1. Lightbox Logic --- */
const galleryItems = document.querySelectorAll('.gallery-item img, .hero-image-placeholder img');

galleryItems.forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

/* --- 2. Reveal on Scroll Logic --- */
const observerOptions = {
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

// Target the containers for the reveal effect
const scrollItems = document.querySelectorAll('.gallery-item, .hero-image-placeholder');

scrollItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.8s ease-out";
    observer.observe(item);
});