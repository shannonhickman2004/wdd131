
const wcf = document.querySelector('#windChill');


function windChill(temp, speedMs) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speedMs, 0.16)) + (0.3965 * temp * Math.pow(speedMs, 0.16));
}


let tempC = 10;
let speedKmh = 5;


let speedMs = speedKmh / 3.6;


if (tempC <= 10 && speedKmh > 4.8) {
    wcf.textContent = windChill(tempC, speedMs).toFixed(1) + "°C";
} else {
    wcf.textContent = "N/A";
}


