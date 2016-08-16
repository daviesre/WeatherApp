var Weather = require('./../js/weather.js').weatherModule;
var Temperature = require('./../js/weather.js')

var displayWeather = function(city, humidityData, tempData) {
    $('.showWeather').html("<p>The humidity in " + city + " is " + humidityData + "%.</p><p>The temperature is " + tempData + " degrees.");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayWeather);
  });
});
