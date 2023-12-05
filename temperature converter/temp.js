function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    var convertedTemperature = 0;

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultElement.textContent = temperatureInput + " Celsius is equal to " + convertedTemperature + " Fahrenheit.";
    } else {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        resultElement.textContent = temperatureInput + " Fahrenheit is equal to " + convertedTemperature + " Celsius.";
    }
}
