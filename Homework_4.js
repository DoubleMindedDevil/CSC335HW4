// Add your javascript here
$(function(){
  $("h1").mouseover(function() {
    $(".button").css("backgroundColor", "green");
  });
  
  
  $("h1").mouseleave(function(){
    $(".button").css("backgroundColor", "white");
  });
  
  
  $('.button:contains("Click here")').click(function(){
    $(this).parent("li:not(:has(ul))").append("<ul></ul>");
    $(this).parent("li").children("ul:not(:has('li'))").append("<li></li>")
    $(this).parent("li").find("li").append('<input type="button">')
    $(':input:last').attr('button')
    $(':button:last').val('Delete Me!');
    $(':button:last').click(function(){
      $(this).remove() 
    });
  });
  
  $('.button:contains("And now for")').click(function(){
    $(this).replaceWith("<span></span>");
    $('span:empty()').text('Nobody expects the Spanish Inquisition!');
    $('span:contains("Nobody expects")').css({'color': 'limegreen', 'backgroundColor': 'purple'});
  });
});