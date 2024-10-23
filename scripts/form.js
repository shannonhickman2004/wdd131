const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];


document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    const placeholderOption = document.createElement('option');
    placeholderOption.textContent = 'Select a Product';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    productSelect.appendChild(placeholderOption);

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const selectedProduct = document.getElementById('productName').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const reviewText = document.getElementById('reviewText').value;

        localStorage.setItem('selectedProduct', selectedProduct);
        localStorage.setItem('rating', rating);
        localStorage.setItem('reviewText', reviewText);

        let reviewsCount = parseInt(localStorage.getItem('reviewsCount')) || 0;
        reviewsCount++;
        localStorage.setItem('reviewsCount', reviewsCount);

        window.location.href = 'submission.html';
    });

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Updated: " + lastModified;
});