// var total=0;
// document.getElementById("addition").onclick=additionNum;
// document.getElementById("subtract").onclick=subtractNum;
// document.getElementById("multiply").onclick=multiplyNum;
// document.getElementById("divide").onclick=divideNum;
//
//
//
// function additionNum(){
//   var a = document.getElementById('left').value;
//   a =parseFloat(a);
//   var b = document.getElementById('right').value;
//   b=parseFloat(b);
//   total= a+b
//   document.getElementById('result').innerHTML=total;
//   document.getElementById('left').value="";
//   document.getElementById('right').value="";
//
//
// }
//
// function subtractNum(){
//     var a = document.getElementById("left").value;
//     a=parseFloat(a)
//     var b = document.getElementById("right").value;
//     b=parseFloat(b)
//     total= a-b;
//     document.getElementById('result').innerHTML=total;
//     document.getElementById('left').value="";
//     document.getElementById('right').value="";
//
// }
// function multiplyNum(){
//   var a = document.getElementById('left').value;
//   a=parseFloat(a)
//   var b = document.getElementById('right').value;
//   b=parseFloat(b)
//   total= a*b;
//   document.getElementById('result').innerHTML=total;
//   document.getElementById('left').value="";
//   document.getElementById('right').value="";
//
// }
// function divideNum(){
//     var a = document.getElementById("left").value;
//     a=parseFloat(a)
//     var b = document.getElementById("right").value;
//     b=parseFloat(b)
//     total= a/b;
//     document.getElementById('result').innerHTML=total;
//     document.getElementById('left').value="";
//     document.getElementById('right').value="";
//
//   }

$(document).ready(function(){
var a=0;
var b=0;
var total=0;

$("#addition").on("click", function(){
a=$("#left").val();
b=$("#right").val();
total= parseFloat(a)+ parseFloat(b);
$("#result").html(total);
$("#left").val();
$("#right").val();

});
$("#subtract").on("click", function(){
a=$("#left").val();
b=$("#right").val();
total= parseFloat(a)- parseFloat(b);
$("#result").html(total);
$("#left").val();
$("#right").val();

});
$("#multiply").on("click", function(){
a=$("#left").val();
b=$("#right").val();
total= parseFloat(a)* parseFloat(b);
$("#result").html(total);
$("#left").val();
$("#right").val();

});
$("#divide").on("click", function(){
a=$("#left").val();
b=$("#right").val();
total= parseFloat(a)/ parseFloat(b);
$("#result").html(total);
$("#left").val();
$("#right").val();

});

});
