
// var userTop=0;
// var userLeft=0;
//
// document.getElementById('horse').onclick=horseMoves;
// document.getElementById('cow').onclick=cowMoves;
// document.getElementById('chicken').onclick=chickenMoves;
// document.getElementById('sheep').onclick=sheepMoves;
// document.getElementById('pig').onclick=pigMoves;
//
// function horseMoves(){
//  userTop = GetRandomPosition();
//  userLeft = GetRandomPosition();
//  console.log(userTop)
//  document.getElementById('horse').style.top = marginTop + "px"
//  document.getElementById('horse').style.left = marginLeft +"px"
//   // when i click on horse itll move to a different position on page
//   // move randomly using margin
//   // marginTop =GetRandomPosition();
//   // marginLeft = GetRandomPosition();
//
//   document.getElementById('music').src='http://www.wavlist.com/soundfx/006/horse-neigh1.wav';
//   document.getElementById('music').play();
// }
// function cowMoves(){
//  marginTop = GetRandomPosition();
//  marginLeft = GetRandomPosition();
//  console.log(userTop)
//  document.getElementById('cow').style.top = userTop + "px"
//  document.getElementById('cow').style.left = userLeft +"px"
//  document.getElementById('music').src='http://www.wavlist.com/soundfx/003/cow-moo1.wav';
//  document.getElementById('music').play();
// }
//
// function chickenMoves(){
//  userTop = GetRandomPosition();
//  userLeft = GetRandomPosition();
//  console.log(userTop)
//  document.getElementById('chicken').style.top = userTop + "px"
//  document.getElementById('chicken').style.left = userLeft +"px"
//  document.getElementById('music').src='http://www.wavlist.com/soundfx/009/chicken-1.wav';
//  document.getElementById('music').play();
//
//
// }
// function sheepMoves(){
//  userTop = GetRandomPosition();
//  userLeft = GetRandomPosition();
//  console.log(userTop)
//  document.getElementById('sheep').style.top = userTop + "px"
//  document.getElementById('sheep').style.left = userLeft +"px"
//  document.getElementById('music').src='http://www.wavlist.com/soundfx/005/sheep-bah2.wav';
//  document.getElementById('music').play();
// }
// function pigMoves(){
//  userTop = GetRandomPosition();
//  userLeft = GetRandomPosition();
//  console.log(userTop)
//  document.getElementById('pig').style.top = userTop + "px"
//  document.getElementById('pig').style.left = userLeft +"px"
//  document.getElementById('music').src='http://www.wavlist.com/soundfx/016/pig-2.wav';
//  document.getElementById('music').play();
// }
// function GetRandomPosition(){
//   return Math.random()*400;
//
//
// }
//
// make sound
$("#horse").on("click", function(){
userTop=Math.random ()*400;
userLeft=Math.random ()*400;
$(this).css("top", userTop);
$(this).css("left", userLeft);

  });

  $("#cow").on("click", function(){
  userTop=Math.random ()*400;
  userLeft=Math.random ()*400;
  $(this).css("top", userTop);
  $(this).css("left", userLeft);

    });

    $("#chicken").on("click", function(){
    userTop=Math.random ()*400;
    userLeft=Math.random ()*400;
    $(this).css("top", userTop);
    $(this).css("left", userLeft);

      });
      $("#sheep").on("click", function(){
      userTop=Math.random ()*400;
      userLeft=Math.random ()*400;
      $(this).css("top", userTop);
      $(this).css("left", userLeft);

        });

        $("#pig").on("click", function(){
        userTop=Math.random ()*400;
        userLeft=Math.random ()*400;
        $(this).css("top", userTop);
        $(this).css("left", userLeft);


          });
        $("#horse").on("click", function(){
          $("#nayy")[0].play();
        });

        $("#cow").on("click", function(){
          $("#moo")[0].play();
        });
        $("#chicken").on("click", function(){
          $("#cluck")[0].play();
        });
        $("#sheep").on("click", function(){
          $("#baa")[0].play();
        });
         $("#pig").on("click", function(){
            $("#piggy")[0].play();
          });
