var weather = {}

weather.settings = {}

weather.settings.enabled = JSON.parse(enabled)
weather.settings.size = JSON.parse(size)
weather.settings.region = JSON.parse(region)
weather.settings.color = JSON.parse(color)

weather.api = {}
weather.api.key = JSON.parse(key)
weather.api.latitude = JSON.parse(latitude)
weather.api.longitude = JSON.parse(longitude)


weather.update_interval = 600000
weather.update = function(tile) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          parseDSresponse(JSON.parse(xmlHttp.responseText),tile)
  }
  var key = weather.api.key
  var lat = weather.api.latitude
  var lon = weather.api.longitude
  xmlHttp.open("GET","https://api.darksky.net/forecast/"+weather.api.key+"/"+
               weather.api.latitude+","+weather.api.longitude,true)
  xmlHttp.send(null)
}


function parseDSresponse(response,tile) {
  tile.html = '<div class="weather" id="current_temp">'+
              Math.round(response.currently.temperature).toString()+'°</div>'

  tile.html += '<div class="weather" id="today_high">'+'High: '+
               Math.round(response.daily.data[0].temperatureMax).toString()+'°'+
               '</div><div class="weather" id="today_low">'+'Low: '+
               Math.round(response.daily.data[0].temperatureMin).toString()+'°'+
               '</div>'

  tile.html += '<div class="weather" id="today_summary">'+
               response.hourly.summary+'</div>'

  tile.html += '<div class="weather" id="DScredit"><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></footer>'
  // console.log(tile.html)
}

tiles.weather = weather
