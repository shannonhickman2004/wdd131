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
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
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
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119620,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
  },
  {
    templeName: "Oquirrh Mountain Utah",
    location: "South Jordan, Utah, United States",
    dedicated: "2009, August, 21",
    area: 60189,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oquirrh-mountain-utah/400x250/oquirrh-mountain-utah-temple-1012337-high-res-print.jpg"
  },
  {
    templeName: "Monticello Utah",
    location: "Monticello, Utah, United States",
    dedicated: "1998, July, 26",
    area: 10698,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monticello-utah/400x250/monticello-temple-766559-wallpaper.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42525,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775369-wallpaper.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-947137-wallpaper.jpg"
  }
];

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

function displayTemples(filteredTemples) {
  let container = document.querySelector("#temple-cards-container");
  container.innerHTML = "";
  filteredTemples.forEach(function (temple) {
    let card = createTempleCard(temple);
    container.appendChild(card);
  });
}

function filterByOld() {
  const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900);
  displayTemples(oldTemples);
}

function filterByNew() {
  const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) >= 2000);
  displayTemples(newTemples);
}

function filterByLarge() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}

function filterBySmall() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}

function showAllTemples() {
  displayTemples(temples);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('a[href="home.html"]').addEventListener("click", function (event) {
    event.preventDefault();
    showAllTemples();
  });

  document.querySelector('a[href="old.html"]').addEventListener("click", function (event) {
    event.preventDefault();
    filterByOld();
  });

  document.querySelector('a[href="new.html"]').addEventListener("click", function (event) {
    event.preventDefault();
    filterByNew();
  });

  document.querySelector('a[href="large.html"]').addEventListener("click", function (event) {
    event.preventDefault();
    filterByLarge();
  });

  document.querySelector('a[href="small.html"]').addEventListener("click", function (event) {
    event.preventDefault();
    filterBySmall();
  });

  showAllTemples();
});