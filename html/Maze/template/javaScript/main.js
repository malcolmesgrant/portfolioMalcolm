// var megaman = document.getElementById('mega');
// var megamanLeft = 0;
// var megamanTop = 0;
// document.getElementById('mega')=on
// function anim(e) {
//     if(e.keyCode==39) {
//         megamanLeft +=10;
//         megaman.style.left = megamanLeft + 'px';
//   }
//   else if(e.keyCode==37) {
//         megamanLeft -=10;
//         megaman.style.left = megamanLeft + 'px';
//   }
//  else if(e.keyCode==40) {
//         megamanTop +=10;
//         megaman.style.top = megamanTop + 'px';
//   } else if(e.keyCode==38) {
//         megamanTop -=10;
//         megaman.style.top = megamanTop + 'px';
//   }
// }
// document.getElementById('mega') = anim;
// document.onkeyup = key;
//
//
//
// document.onKeyDown= .leftKeyDown;
// // function leftKeyDown() {
//
//
// }
var megaLeft=0
var megaTop=0
$(document).keydown(function(e){
if(e.which==39){
  megaLeft+=10
  $("#mega").css("marginLeft", megaLeft +"px")

}else if(e.which==40){
  megaTop+=10
  $("#mega").css("marginTop", megaTop +"px")

}
else if (e.which==38){
  megaTop-=10
  $("#mega").css("marginTop", megaTop +"px")

}
else if (e.which==37){
  megaLeft-=10
  $("#mega").css("marginLeft", megaLeft +"px")

}




});
