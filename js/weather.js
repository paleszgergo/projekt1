let temperatures = [-11.2, 14.4, 13.0, 17.3, 21.7, 18.2, 28.0];
let temperatureUpperLimits = [0, 15, 20, 25, 50];
let offers = ["Ma forró csokit is árusítunk.", 
    "Melegedj át egy teával nálunk!", 
    "Ma finom sütivel várunk.", 
    "Ma fagyit is kínálunk!", 
    "Hűtsd le magad egy jéghideg limonádéval!"];

function weatherWidget() {
    const day = document.querySelector('#day:checked').value;
    const temperatureDiv = document.querySelector('#temperature');
    const temperatureOffer = document.querySelector('#offer');
    temperatureDiv.innerHTML = '<strong>' + temperatures[day] + ' &deg;C</strong>';
    for (let i = 0; i < temperatureUpperLimits.length; i++) {
        if (temperatures[day] <= temperatureUpperLimits[i]) {
            temperatureOffer.innerHTML += '<span class="text-warning pr-2 ">' + offers[i] + '</span>';
            break;
        }
    }

    minTemperature();
    maxTemperature();
    avgTemperature();

};

function minTemperature() {
    let minTemp = document.querySelector('#low');
    let min = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 1; i < temperatures.length; i++) {
        if (temperatures[i] < min) {
            min = temperatures[i];
            
        }
        
    }
    minTemp.innerHTML += ' <span class="text-warning text-center">' + min + '&deg;C</span>';
    return min;
};

function maxTemperature() {
    let maxTemp = document.querySelector('#high');
    let max = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 1; i < temperatures.length; i++) {
        if (temperatures[i] > max) {
            max = temperatures[i];
        }
        
    }
    maxTemp.innerHTML += ' <span class="text-warning text-center">' + max + '&deg;C</span>';
    return max;
};

function avgTemperature() {
    let avrTemp = document.querySelector('#sum')
    let avg = 0;
    for (let i = 0; i < temperatures.length; i++) {
        avg += (temperatures[i] / temperatures.length);
        
    }
    avrTemp.innerHTML += ' <span class="text-warning text-center">' + avg.toFixed(1) + '&deg;C</span>';
    return temperatures.length != 0 ? avg / temperatures.length : 0;
};

