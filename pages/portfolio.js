const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
var typed = new Typed(".typewriter", {
    strings: ["Frontend Developer", 
        "Backend Developer",
         "FullStack Developer ",
        "UI/UX Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// Get the buttons
const skillsButton = document.getElementById("skills-btn");
const educationButton = document.getElementById("education-btn");

// Get the content sections
const skillsSection = document.querySelector(".skills");
const educationSection = document.querySelector(".education");

// Function to display the skills section
skillsButton.addEventListener("click", () => {
    skillsSection.style.display = "block";  // Show the skills section
    educationSection.style.display = "none";  // Hide the education section
});

// Function to display the education section
educationButton.addEventListener("click", () => {
    educationSection.style.display = "block";  // Show the education section
    skillsSection.style.display = "none";  // Hide the skills section
});

// Improved hamburger menu toggle
hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        hamIcon.style.display = "none";
        crossIcon.style.display = "inline-block";
    } else {
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
    }
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.querySelector('.hamburger-icon').style.display = "inline-block";
        hamburger.querySelector('.cross-icon').style.display = "none";
    }
});

// Close menu when clicking on a menu item
menu.querySelectorAll('.links').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.querySelector('.hamburger-icon').style.display = "inline-block";
        hamburger.querySelector('.cross-icon').style.display = "none";
    });
});