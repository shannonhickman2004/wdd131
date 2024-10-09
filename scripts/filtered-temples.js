const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Logan Utah",
      location: "Logan, Utah, United States",
      dedicated: "1884, May, 17",
      area: 119620,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-utah-temple-1075606-wallpaper.jpg"
    },
    {
      templeName: "Oquirrh Mountain Utah",
      location: "South Jordan, Utah, United States",
      dedicated: "2009, August, 21",
      area: 60189,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oquirrh-mountain-utah/400x250/oquirrh-mountain-utah-temple-1075606-wallpaper.jpg"
    }
];

createTemplateCard();

function createTempleCard(temple) {
    let card = document.createElement("div");
    card.className = "temple-card";

    let templeName = document.createElement("h2");
    templeName.textContent = temple.templeName;
    card.appendChild(templeName);

    let location = document.createElement("p");
    location.textContent = "Location: " + temple.location;
    card.appendChild(location);

    let dedicated = document.createElement("p");
    dedicated.textContent = "Dedicated: " + temple.dedicated;
    card.appendChild(dedicated);

    let area = document.createElement("p");
    area.textContent = "Area: " + temple.area + " sq. ft.";
    card.appendChild(area);

    let img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName + " image";
    img.loading = "lazy";
    card.appendChild(img);

    return card;
}

function displayTemples() {
    let container = document.querySelector("#temple-cards-container");
    container.innerHTML = ""; 

    temples.forEach(function(temple) {
        let card = createTempleCard(temple);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    displayTemples();
});