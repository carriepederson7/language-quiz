$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    $(".results").hide();



    var type=$("input:radio[name=type]:checked").val();
    var setting=$("input:radio[name=setting]:checked").val();
    var frontBack=$("input:radio[name=frontBack]:checked").val();
    var earning=$("input:radio[name=earning]:checked").val();
    var graphics=$("input:radio[name=graphics]:checked").val();

    if (!type || !setting || !frontBack || !earning || !graphics){
      alert("Please answer all of the questions.")
    }else if((type === "mobile"|| "game") && (setting === "traditional" || "start-up") && (graphics === "high" || "medium" ) && frontBack=== "back-end"){
      $("#csharp").show();
    }else if(type === "web" && setting === "freelance" && (earning === "important" || "somewhat-important") && graphics === "low" && frontBack === "back-end"){
      $("#php").show();
    }else {
      $("#javascript").show();
    }

  });

});
