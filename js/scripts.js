       //\\
      //  \\
     //    \\
    //      \\
   //        \\
  //          \\
 //            \\
//User Interface\\

$(function() { //iife
  $("#submit-form").submit(function(event) { 
    event.preventDefault();

    var languagePref = $("#language-pref").val(); //just compare strings
    var drinkPref = parseInt($("#drank").val()); //parse this one as int for science.
    //var trueOrFalse = parseInt($("#ux").val()) 


    if (languagePref === "GOLANG" || languagePref === "C#" && !"DESIGN") { //check for a matching string. 
        $("#recommendation2").hide();
        $("#recommendation3").hide();
        $("#recommendation").show();
    }
    else if (drinkPref > 3 && drinkPref < 6) { //what you drink determines what kind of coding interests.haha
      $("#recommendation").hide();
      $("#recommendation3").hide();
      $("#recommendation2").show();
    }
    else {
       $("#recommendation3").show();
       $("#recommendation").hide() 
       $("#recommendation2") .hide();
    }

	   

  });
});
