function weather() {
  var url = 'https://api.forecast.io/forecast/';
  var location = document.getElementById("location");
  var apiKey = 'c97345bc110bba881e5f9fe5d27a2b59';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = 'Latitude: ' + latitude + '° <br> Longitude: ' + longitude + '°';

     $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      var temp = (data.currently.temperature -  32) * 5/9;
      $('#temp').html('<p> Temperature: ' + temp + '° C' + '</p>');
      $('#hourly').html('<p> Hourly Summary: ' + data.hourly.summary + '</p>');
      $('#minutely').html('<p> Minute Summary: ' + data.minutely.summary + '</p>' );
      $('#loc').html('<p> Location: ' + data.timezone + '</p>');
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location.";
  }

  location.innerHTML = "Currenly Locating...";
}

weather();
