/* Button Change Color Hover Function --> */

$('#button').on("mouseenter", function(){
    $('#button').css("background-color", "#9B6C85"
    );
  });

  $('#button').on("mouseleave", function(){
    $('#button').css("background-color", "#604152"
    );
  });

  /*Preloader*/

console.log("Your index.js file is loaded correctly!");

function fade(){
    $(".preloader").fadeOut("slow");
}
setTimeout(fade, 4000);
