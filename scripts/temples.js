// hamburger button
const hamButton = document.querySelector('#menu'); 
const navigation = document.querySelector('.navigation'); 

// what happens when you blick the button
hamButton.addEventListener('click', () => { // Fill in the event type
    navigation.classList.toggle('open'); // Toggle which class is open
    hamButton.classList.toggle('open'); // Changes which icon shows
});

// Gives the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// shows the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Updated: " + lastModified;
