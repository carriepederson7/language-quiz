$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    $(".results").hide();



    var type=$("input:radio[name=type]:checked").val();
    var setting=$("input:radio[name=setting]:checked").val();
    var frontBack=$("input:radio[name=front-back]:checked").val();
    var earning=$("input:radio[name=earning]:checked").val();
    var graphics=$("input:radio[name=graphics]:checked").val();

    if (!type || !setting || !frontBack || !earning || !graphics){
      alert("Please answer all of the questions.")
    }else if(frontBack === "back-end" && (graphics === "high" || "medium" || type === "mobile")|| "game"){
      $("#csharp").show();
    }else if(frontBack === "back-end" && (setting === "freelance" || type === "web" || earning === "important" || "somewhat-important")){
      $("#php").show();
    }else {
      $("#javascript").show();
    }

  });

});
