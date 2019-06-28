$(document).on("turbolinks:load", function(){
  console.log($('#post_body').val());
  $('#post_body').val().replace(/<p>/gi, '')
})
