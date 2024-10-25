document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const contactForm = document.querySelector('.contact-form'); // Define contactForm

    menuButton.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('open');
        menuButton.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', isOpen);
    });

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").textContent =
        "Last Updated: " + lastModifiedDate.toLocaleDateString();

    // Add event listener for form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents form from submitting the usual way

        const formData = {
            firstName: contactForm.fname.value,
            lastName: contactForm.lname.value,
            phone: contactForm.phone.value,
            email: contactForm.email.value,
            message: contactForm.message.value,
            checkin: contactForm.checkin.value,
            checkout: contactForm.checkout.value,
        };

        localStorage.setItem('contactFormData', JSON.stringify(formData));

        // Redirect to a thank-you page
        window.location.href = 'thanks.html';
    });
});
