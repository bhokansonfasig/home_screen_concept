var quote = {}

quote.settings = {}

quote.settings.enabled = JSON.parse(enabled)
quote.settings.size = JSON.parse(size)
quote.settings.region = JSON.parse(region)
quote.settings.color = JSON.parse(color)


quote.update_interval = 3600000
quote.update = function(tile) {
  tile.html = "<h1> Quote </h1>"
}


tiles.quote = quote
