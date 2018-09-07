$(document).on('turbolinks:load', function(){
  let giphyParser = (data) => {
    return data["data"]["images"]["fixed_height_small"]["url"]
  }

  $.ajax({
    url: "https://api.giphy.com/v1/gifs/random?api_key=Tuj9vNIEbyrqJiaFO1VrJHlOmbWpnY7S&tag=funny&rating=PG",
    dataType: "JSON",
    method: "GET",
    success: function(data){
      $(".header-gif").attr("src", giphyParser(data));
    }
  })
})
