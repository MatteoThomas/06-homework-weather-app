$(document).ready(function() {
    console.log('script loaded')
  
  //EVENTLISTNER
   $("#search").click(makeCall)
   
   $(document).on('keypress',function(e) {
    if(e.which == 13) {
        makeCall();
    }
});
  
    // custom handling here
  
    // oops...runtime error, but at least the user isn't navigated away.
 
    jQuery(function($){
        $('#mybutton').one('click', function(){
            var r=$('<input/>').attr({
                type: "button",
                id: "field",
                value: 'new'
            });
            $("body").append(r);   
        })
    })
  


//FUNCTION ADD AJAX CALL FOR OPENWEATHER API
    function makeCall(){
      let url = "http://api.openweathermap.org/data/2.5/weather?q=";
      let city = $('#search').val();
      let apiKey = ",us&units=imperial&appid=4e8ad3d15d8478bae05eb0f65aa3a1eb";
      let total = url + city + apiKey;
      console.log(city)
      
      $('<a/>', {html: city}).appendTo('#list-group')
      
      $(function($){
        $('#search').one('click', function(){
            var r=$('<button type="button" class="list-group-item list-group-item-action"/>').attr({
                type: "button",
                id: "field",
                value: 'new'
            });
            $("list-group").append(r);   
        })
    })
      $.getJSON(total, function(data) {
        getData(data)
    
    });
    }
  
    //GRAB THE DATA
    var getData = function (data){
      var location= data.name;
      var temp=data.main.temp.toFixed();
      var desc =data.weather[0].description;
      var minTemp = data.main.temp_min.toFixed();
      var maxTemp = data.main.temp_max.toFixed();
  
      //images changes depending on the temp
      if(temp > 80){
        $('.imageWrapper').addClass('wrapper_hot');
        }else if
        (temp > 41 && temp < 79){
        $('.imageWrapper').addClass('wrapper_normal');
        }else if
        (temp < 40){
        $('.imageWrapper').addClass('wrapper_cold');
        }
        manipulateDom(location, temp, desc, minTemp, maxTemp)
    }
  
  
  //Displays returned info in the Dom
    var manipulateDom = function(location, temp, desc, minTemp, maxTemp){
     // console.log('inside manipulateDom');
      $('#location').html(location);
      $('#temp').html(temp + "&deg");
      $('#desc').html(desc);
      $('#minTemp').html(minTemp + "&deg");
      $('#maxTemp').html(maxTemp + "&deg");
    }
  
 
    })
  

  
  



/* weather api call works
function weatherBalloon(cityID) {
    var key = '4e8ad3d15d8478bae05eb0f65aa3a1eb';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
            // catch any errors
        });
}

window.onload = function () {
    weatherBalloon(6167865);
}
function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	var description = d.weather[0].description;
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
	
	if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  }
}
*/