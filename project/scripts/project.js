document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open'); // Toggle the 'open' class
        menuButton.classList.toggle('open'); // Optional: Change button state
    });

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Set last modified date in footer
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Updated: " + lastModified;
});