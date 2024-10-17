// Product array to populate the product selection
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productSelect = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // Set the option value to the product ID
    option.textContent = product.name; // Set the display text to the product name
    productSelect.appendChild(option);
});


document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    
    const reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;
    localStorage.setItem('reviewCount', reviewCount + 1);

    
    const formData = new FormData(this);
    console.log('Review submitted:', Object.fromEntries(formData.entries())); // Log form data

    
    window.location.href = 'review.html';
});


document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Updated: " + lastModified;
});