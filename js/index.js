$('#login-button').click(function(){
  $('#login-button').fadeOut("slow",function(){
    $("#container2").fadeIn();
    TweenMax.from("#container2", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#container2", .4, { scale: 1, ease:Sine.easeInOut});
  });
});

$(".close-btn").click(function(){
  TweenMax.from("#container2", .4, { scale: 1, ease:Sine.easeInOut});
  TweenMax.to("#container2", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
  $("#container2, #forgotten-container").fadeOut(800, function(){
    $("#login-button").fadeIn(800);
  });
});

/* Villes précédentes */
$('#forgotten').click(function(){
  $("#container2").fadeOut(function(){
    $("#forgotten-container").fadeIn();
  });
});