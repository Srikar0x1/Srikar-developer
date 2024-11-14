const tagline = "Web Developer0 | Soccer Enthusiast";
let index = 0;
function typeEffect() {
    document.getElementById("tagline").textContent += tagline[index];
    index++;
    if (index < tagline.length) {
        setTimeout(typeEffect, 150);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Scroll Indicator
window.onscroll = function() {scrollIndicator()};
function scrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-indicator").style.width = scrolled + "%";
}
// Lightbox Functionality
function openModal(element) {
    document.getElementById("lightbox-modal").style.display = "block";
    document.getElementById("lightbox-img").src = element.querySelector("img").src;
}

function closeModal() {
    document.getElementById("lightbox-modal").style.display = "none";
}
// Animate Skills Bars on Scroll
window.addEventListener('scroll', animateSkills);
function animateSkills() {
    const skillsSection = document.querySelector('.skills');
    const skills = document.querySelectorAll('.skill-level');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;
    if (sectionPos < screenPos) {
        skills.forEach(skill => {
            skill.style.width = skill.getAttribute('data-level');
        });
    }
}
// Dark Mode Toggle
document.getElementById("dark-mode-toggle").onclick = function() {
    document.body.classList.toggle("dark-mode");

    // Toggle class on other elements that need dark mode styling
    document.querySelectorAll("header, footer, .testimonials, .contact, .nav-link, .cta-button, .social-links a")
        .forEach(el => el.classList.toggle("dark-mode"));
};
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Example usage in a project item
document.querySelector(".project-item").onclick = function() {
    openModal("project1-modal");
};
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach((project) => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[currentTestimonialIndex].style.display = 'none';
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    testimonials[currentTestimonialIndex].style.display = 'block';
}

setInterval(showNextTestimonial, 3000); // Rotate every 3 seconds
window.onload = showNextTestimonial;
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function animateSkills() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const width = skill.dataset.skillLevel;
        skill.style.width = width;
    });
}

window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (skillsPosition < screenPosition) {
        animateSkills();
    }
});
new Typed('#tagline', {
    strings: ["Web Developer", "Soccer Enthusiast", "React Specialist"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
function sendEmail(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contact-form')
        .then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Try again later.");
        });
}

document.getElementById("contact-form").addEventListener("submit", sendEmail);
window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};
let currentImageIndex = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const hero = document.querySelector(".hero");

function changeHeroImage() {
    hero.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeHeroImage, 5000); // Change every 5 seconds
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        const categories = project.dataset.category.split(' ');
        project.style.display = (category === 'all' || categories.includes(category)) ? 'block' : 'none';
    });
}
particlesJS("hero", {
    particles: {
        number: { value: 80 },
        color: { value: "#FF6363" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150, color: "#FF6363", opacity: 0.4, width: 1 }
    }
});
