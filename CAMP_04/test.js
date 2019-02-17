// // alert(11111);

// console.log("初めてののジャバスクリプト");
// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5");

// var name = '今野';
// console.log('自分の名前を表示');
// console.log("name");


// var point=Math.floor(Math.random() *100);
// if (point >= 80) {
//     console.log('素晴らしい');
//   } else {
//     console.log('もっと頑張りましょう');
//   }


//   var m=Math.floor(Math.random() *5+1);
//   console.log(m);

//   var points=Math.floor(Math.random() *5+1);
//   console.log(points);
// if (points = 1) {
//     console.log('1だよ');
//   } else if (points =2){
//     console.log('2だよ');
//   } else if (points =3){
//       console.log('３だよ');
// 　} else if (points =4){
//         console.log('4だよ');
//   } else {
//     console.log('5だよ');   
//   }
var count=0;
$(document).ready(function(){ 
    count++;

})

$(function(){
    $(".bmi").hide();


   var a = $('.taijuu').html();
   console.log(a)
   
   var b = $('.sin').html();
   console.log(b)

   var bmi = Math.floor(a / ((b / 100) * (b / 100))) ;

   console.log(bmi)
    $(".tt").text(bmi);
   
    $(".kekka").on('click', function(){
        $(".wrap").fadeOut(1000);

        $(".bmi").fadeIn(1000);
        
    })
});
