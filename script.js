document.getElementById("toCelsius").addEventListener("click", function () {
    var inputTemperature = document.getElementById("temperature").value;
    var celsius = (inputTemperature - 32) * 5/9;
    document.getElementById("result").innerHTML = inputTemperature + "°F é igual a " + celsius.toFixed(2) + "°C.";
});

document.getElementById("toFahrenheit").addEventListener("click", function () {
    var inputTemperature = document.getElementById("temperature").value;
    var fahrenheit = (inputTemperature * 9/5) + 32;
    document.getElementById("result").innerHTML = inputTemperature + "°C é igual a " + fahrenheit.toFixed(2) + "°F.";
});

document.getElementById("toKelvin").addEventListener("click", function () {
    var inputTemperature = document.getElementById("temperature").value;
    var kelvin = parseFloat(inputTemperature) + 273.15;
    document.getElementById("result").innerHTML = inputTemperature + "°C é igual a " + kelvin.toFixed(2) + "K.";
});