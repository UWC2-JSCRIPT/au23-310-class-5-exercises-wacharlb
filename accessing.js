// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

// Change the styling of every element with class "sun" to set the color to "orange"

// Change the class of the second <li> from to "sun" to "cloudy"

const elem = document.getElementById('weather-head');

elem.innerHTML = "Febuary 10 Weather Forecast,Seattle";

//elem.style.color = "orange";

const liElemts = document.querySelectorAll(".sun");
for(element of liElemts) {
    element.style.color = "orange";
}

liElemts[0].className = 'cloudy';