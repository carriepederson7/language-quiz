$(document).ready(function(){
  $("$#quiz").submit(function(event){
    event.preventDefault();
    $(".results").hide();

    var type=$("input:radio[name=type]:checked").val();
    var setting=$("input:radio[name=setting]:checked").val();
    var frontBack=$("input:radio[name=front-back]:checked").val();
    var earning=$("input:radio[name=earning]:checked").val();
    var graphics=$("input:radio[name=graphics]:checked").val();

  )};

)};
