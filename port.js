// Mobile navigation menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Contact form validation

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must contain at least 3 characters.";
        valid = false;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        valid = false;
    } else if (message.length < 10) {
        messageError.textContent =
            "Message must contain at least 10 characters.";
        valid = false;
    }

    if (valid) {
        successMessage.textContent =
            "Message validated successfully!";

        contactForm.reset();
    }
});