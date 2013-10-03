    //support for cross domain

    $.ajaxSetup({
	xhr: function () {
	    return new window.XMLHttpRequest({
		mozSystem: true
	    });
	}
    });


    //Get Weather by Manual Location
    var raw;

    function getWeatherManual(city) {
	//url
	//alert("http://api.openweathermap.org/data/2.5/find?q="+city+"&type=like");
	$.ajax({
	    type: "GET",
	    url: "http://api.openweathermap.org/data/2.5/find?q=" + city + "&type=like",
	    success: function (data) {
		raw = data;
		//alert("worked!!");
		parse(raw);
	    }
	});
    };
    
    //Get Weather by Auto Location
    
    function getWeatherAuto(lat,lon){
        //url
        //alert("http://api.openweathermap.org/data/2.5/find?lat="+lat+"&lon="+lon);
        $.ajax({
	    type: "GET",
	    url: "http://api.openweathermap.org/data/2.5/find?lat="+lat+"&lon="+lon,
	    success: function (data) {
		raw = data;
		//alert("worked!!");
		parse(raw);
	    }
	});
      
    };
    
    
    
    
	//Parse 
	var response;

	function parse(raw) {
	    //alert(raw.list[0]);
	    weather = {

		location: {
		    lon: raw.list[0].coord.lon, //longitude
		    lat: raw.list[0].coord.lat, //latitude
		    name: raw.list[0].name, //name of location
		    country: raw.list[0].sys.country, //country
		    sunrise: raw.list[0].sys.sunrise, //sunrise
		    sunset: raw.list[0].sys.sunset //sunset
		},



		clouds: {
		    main: raw.list[0].weather[0].main, //clouds and rain description
		    description: raw.list[0].weather[0].description,
		    cover: raw.list[0].clouds.all //cloud cover percentage
		},

		temperature: {
		    main: raw.list[0].main.temp, //current temperature
		    min: raw.list[0].main.temp_min, //minimum tmp
		    max: raw.list[0].main.temp_max //max tmp

		},

		wind: {
		    speed: raw.list[0].wind.speed, //speed
		    direction: raw.list[0].wind.deg //direction
		},

		humidity: raw.list[0].main.humidity,
		pressure: raw.list[0].main.pressure
	    }

	    refresh();


	};


    