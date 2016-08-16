var apiKey = "770d4bde064f6f0e0b75987d411d76c9";

$(document).ready(function() {
  $("#weatherLocation").click(function() {
    var city = $("#location").val();
    $("#location").val("");
    $(".showWeather").text("The city you have chosen is " + city + ".");
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
