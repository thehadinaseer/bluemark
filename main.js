// Navigation Menu or Burger 
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});

// Smooth Scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Email Validation 
document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');
    if (email === '') {
        event.preventDefault(); // Prevent form submission
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});

// Top Button Functionality
document.getElementById('toTopBtn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Optionally, you can add logic to show/hide the button based on scroll position
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const toTopBtn = document.getElementById('toTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

// Read More Dialog Functionality 
document.addEventListener('DOMContentLoaded', () => {
    const readMoreToggles = document.querySelectorAll('.read-more-toggle');
    const dialog = document.getElementById('service-dialog');
    const dialogTitle = document.getElementById('dialog-title');
    const dialogContent = document.getElementById('dialog-content');
    const modalClose = document.querySelector('.modal-close');

    readMoreToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            dialogTitle.textContent = toggle.getAttribute('data-title');
            // Convert line breaks into HTML breaks
            dialogContent.innerHTML = toggle.getAttribute('data-content').replace(/\n/g, '<br>');
            dialog.classList.add('is-active');
        });
    });

    modalClose.addEventListener('click', () => {
        dialog.classList.remove('is-active');
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-background')) {
            dialog.classList.remove('is-active');
        }
    });
});

// Properties Funtionality 
document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category-button");
    const propertyCardsContainers = document.querySelectorAll(".property-cards");
    let dotsContainers = document.querySelectorAll(".navigation-dots");

    let currentIndex = 0;
    let cardsPerView = 1;

    // Adjust the view based on screen size
    function updateCardsPerView() {
        if (window.innerWidth <= 768) {
            cardsPerView = 1; // Mobile: 1 card
        } else if (window.innerWidth <= 1024) {
            cardsPerView = 2; // Tablet: 2 cards
        } else {
            cardsPerView = 3; // Desktop: 3 cards
        }
    }

    // Update the number of visible cards on resize
    window.addEventListener('resize', () => {
        updateCardsPerView();
        showCard(currentIndex);
    });

    // Show the card based on the index
    function showCard(index) {
        const visibleContainer = document.querySelector(".property-cards.is-visible");
        const cardWidth = visibleContainer.clientWidth / cardsPerView;
        const offset = index * cardWidth;

        visibleContainer.scrollTo({
            left: offset,
            behavior: 'smooth'
        });

        updateDots(index);
    }

    // Move to the next card
    function nextCard() {
        const visibleContainer = document.querySelector(".property-cards.is-visible");
        const cards = visibleContainer.querySelectorAll(".property-card");

        if (currentIndex < cards.length - cardsPerView) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        showCard(currentIndex);
    }

    // Update dots based on the current index
    function updateDots(index) {
        dotsContainers.forEach(container => {
            const dots = container.querySelectorAll(".dot");
            dots.forEach((dot, dotIndex) => {
                dot.classList.remove("active");
                if (dotIndex === index) {
                    dot.classList.add("active");
                }
            });
        });
    }

    // Set up category buttons
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            categoryButtons.forEach(btn => btn.classList.remove("is-active"));
            button.classList.add("is-active");

            const category = button.getAttribute("data-category");
            propertyCardsContainers.forEach(container => {
                container.classList.remove("is-visible");
                if (container.id === category) {
                    container.classList.add("is-visible");
                }
            });

            currentIndex = 0;
            updateCardsPerView();
            updateDots(currentIndex);
            showCard(currentIndex);
        });
    });

    // Set up dot navigation
    dotsContainers.forEach(container => {
        const dots = container.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentIndex = index;
                showCard(currentIndex);
            });
        });
    });

    setInterval(nextCard, 5000); // Auto-switch every 5 seconds
    updateCardsPerView();
    showCard(currentIndex);
});

// Scrollable Images Functionality 


// JavaScript for Property 1
let currentIndex1 = 0;
const images1 = document.querySelectorAll('#property1-images img');
function showImage1(index) {
    images1.forEach((img, i) => {
        img.style.transform = `translateX(-${index * 100}%)`;
        img.style.transition = 'transform 0.5s ease-in-out';
    });
}
function scrollImages1(direction) {
    currentIndex1 = (currentIndex1 + direction + images1.length) % images1.length;
    showImage1(currentIndex1);
}
setInterval(() => scrollImages1(1), 3000);

// JavaScript for Property 2
let currentIndex2 = 0;
const images2 = document.querySelectorAll('#property2-images img');
function showImage2(index) {
    images2.forEach((img, i) => {
        img.style.transform = `translateX(-${index * 100}%)`;
        img.style.transition = 'transform 0.5s ease-in-out';
    });
}
function scrollImages2(direction) {
    currentIndex2 = (currentIndex2 + direction + images2.length) % images2.length;
    showImage2(currentIndex2);
}
setInterval(() => scrollImages2(1), 3000);

// Repeat similar blocks for each property card (property6-images, property7-images, property11-images, property12-images) with unique currentIndex variables.

document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', event => {
        const target = event.target.getAttribute('data-target');
        const direction = parseInt(event.target.getAttribute('data-direction'));
        if (target === 'property1-images') scrollImages1(direction);
        if (target === 'property2-images') scrollImages2(direction);
        // Add similar conditions for other properties.
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        'property1-images',
        'property2-images',
        'property6-images',
        'property7-images',
        'property11-images',
        'property12-images'
    ];

    properties.forEach((propertyId) => {
        let currentIndex = 0;
        const images = document.querySelectorAll(`#${propertyId} img`);

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.transform = `translateX(-${index * 100}%)`;
                img.style.transition = 'transform 0.5s ease-in-out';
            });
        }

        function scrollImages(direction) {
            currentIndex = (currentIndex + direction + images.length) % images.length;
            showImage(currentIndex);
        }

        setInterval(() => scrollImages(1), 3000);

        document.querySelectorAll('.scroll-btn').forEach(button => {
            button.addEventListener('click', event => {
                const target = event.target.getAttribute('data-target');
                const direction = parseInt(event.target.getAttribute('data-direction'));
                if (target === propertyId) scrollImages(direction);
            });
        });
    });
});

// This code will reload the page every 1 minute (60000 milliseconds)
setTimeout(function(){
    location.reload();
}, 60000);
