    //support for cross domain
    
   $.ajaxSetup( {
  xhr: function() {
    return new window.XMLHttpRequest( {
      mozSystem: true
    } );
  }
} );
    
    
    //Ajax
    var raw; 
function getWeather(){
  
    $.ajax({
       type: "GET",
       url: "http://api.openweathermap.org/data/2.5/weather?id=1275346",
       
       success: function(data){
        raw=data;
        //alert("worked!!");
        parse(raw);
       }
    });
   
   //Parse 
  var response;    
  function parse(raw){

  weather = {
  
      location: {
        lon: raw.coord.lon, //longitude
        lat: raw.coord.lat, //latitude
        name: raw.name, //name of location
        country: raw.sys.country, //country
        sunrise: raw.sys.sunrise, //sunrise
        sunset: raw.sys.sunset   //sunset
      },
  
      
      
      clouds: {
        main: raw.weather[0].main, //clouds and rain description
        description: raw.weather[0].description,
        cover: raw.clouds.all //cloud cover percentage
        },  
  
      temperature: {
        main: raw.main.temp, //current temperature
        min: raw.main.temp_min, //minimum tmp
        max: raw.main.temp_max //max tmp
      
      },
      
      wind: {
        speed: raw.wind.speed, //speed
        direction: raw.wind.deg //direction
      },
      
      humidity: raw.main.humidity,
      pressure: raw.main.pressure
  }
  
  refresh();
  
  
  };
  
  
};