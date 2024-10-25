document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const contactForm = document.querySelector('.contact-form'); 

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

    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        console.log("Form submission prevented"); 

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

        window.location.href = 'thanks.html';
    });
});
