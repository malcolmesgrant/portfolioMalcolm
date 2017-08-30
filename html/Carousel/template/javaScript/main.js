var images= ["images/biggie.jpg", "images/busta.jpg", "images/dmx.jpg", "images/jayz.jpg", "images/kanye.jpg", "images/maxB.jpg", "images/Nas.jpg"]
var count=0;

$("#back").on("click", function(){
if(count==0){
  count=images.length-1;
} else{
  count=count-1;
}
$("img").attr("src", images[count]);
});
$("#skip").on("click", function(){
if(count==6){
  count=images.length-7;
} else{
  count=count+1;
}
$("img").attr("src", images[count]);
});
