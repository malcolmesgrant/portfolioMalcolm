// /When user types in the form input u can press enter "addtolist" button
// starts your todos list/ your todos count update as u add items/
//  click item to cross it off/event delegation-->$("ol").on("click", "li", function(){})
// when u press clear list it clears the whole list/
// Clear completed clears only items crossed thru/
var toDo;


// When user types in the form input u can press enter "addtolist" button
  // starts your todos list/ your todos count update as u add items/
$(".great").on("submit", function(e){
e.preventDefault()
toDo=$("#student").val();
$("ol").append("<li>"+toDo+" <button class='hidden edit'>\t\t edit</button> <button class='hidden remove'>\t\t remove</button></li>");
$("#student").val("");
// your todos count update as u add items/
$("h2").html($("li").length)
});



//  click item to cross it off/event delegation-->$("ol").on("click", "li", function(){})
$("ol").on("click", "div", function(){
$(this).toggleClass("done");
});
// when u press clear list it clears the whole list/
$("#clearList").on("click", function(){
  $("ol").empty();
});
// Clear completed clears only items crossed thru/
$("#clearComplete").on("click", function(){
  $(".done").remove();
});

$("ol").on("mouseenter","li", function(){
  $(this).children("button").toggleClass("hidden");
  $(this).css("background-color", "pink");

});
$("ol").on("mouseleave", "li", function(){
  $(this).children("button").toggleClass("hidden")
  $(this).css("background-color", "white")
});
$("")
//
// $("ol").on("click", "button.edit", function(){
//   $(this).siblings("div").toggleClass("hidden")
//   $(this).siblings("form").toggleClass("hidden")
//
// });
// $(".bad").on("submit", function(e){
//
//   e.preventDefault();
//
// var newList=$("#newEdit").val();
// $("div").remove();
// $("ol").append("<li>"+newList+"</li>")
// $("h2").html($("li").length);

// $(".hidden").on("click", function(){
//   if()
// })
//
// $("ol").on("mouseenter", function(){
//   $("ol").html($("li").css("color", "pink"));
//   });
//   $("ol").on("mouseleave", function(){
//     $("li").css( "color", "black");
//     });
// $( "<button>edit</button><button>remove</button>" )
//  function (){
//     $(this).html($(""));
// });
