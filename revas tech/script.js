
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
}

function handleFormSubmit(event) {
    event.preventDefault();
    var form = document.getElementById("contactForm");
    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<div class="spinner-small"></div> Sending...';
    submitBtn.disabled = true;

    emailjs.sendForm(form.dataset.service, form.dataset.template, form)
        .then(() => {
            form.style.display = "none";
            var successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";
        }, (error) => {
            console.error("Email send failed:", error);
            alert("Failed to send message. Please try again.");
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
        });
}

// EmailJS Configuration
// User ID: JDb2CF37uoKFKUlxJ
// Service ID: service_fgwgzmo
// Template ID: template_dsbj8uj
(function() {
    emailjs.init("JDb2CF37uoKFKUlxJ");
})();

var navbar = document.querySelector('.navbar');
var scrollToTopBtn = document.querySelector('.scroll-to-top');

function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', handleScroll);

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        var navLinks = document.getElementById("navLinks");
        navLinks.classList.remove('open');
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .bento-grid, .services-grid, .testimonial-grid, .values-grid, .team-grid, .gallery-grid, .about-row, .contact-row').forEach(el => {
    observer.observe(el);
});

var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImg");
var modalTitle = document.getElementById("modalTitle");
var modalProfession = document.getElementById("modalProfession");
var modalText = document.getElementById("modalText");
var closeBtn = document.querySelector(".close");

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalTitle.innerHTML = this.alt || "Image";
        modalProfession.innerHTML = this.getAttribute('data-profession') || "";
        modalText.innerHTML = this.getAttribute('data-testimonial') || "Click to view more details.";
    });
});

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };
}

if (modal) {
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal && modal.style.display === "block") {
        modal.style.display = "none";
    }
});
