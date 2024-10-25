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

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = {
                firstName: contactForm.fname.value,
                lastName: contactForm.lname.value,
                phone: contactForm.phone.value,
                email: contactForm.email.value,
                message: contactForm.message.value,
                checkin: contactForm.checkin.value,
                checkout: contactForm.checkout.value,
            };

            Object.entries(formData).forEach(([key, value]) => {
                localStorage.setItem(key, value);
            });


            window.location.href = 'thanks.html';
        });
    }
});
