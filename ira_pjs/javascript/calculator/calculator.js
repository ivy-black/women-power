// /*jshint esversion: 6 */
// class calc {

//   constructor(x) {
//     this.x = x;
//     // var x = document.getElementsByClassName('num').value;
//     //
//     //console.log(document.getElementById(this).i);
//     //   var x = this.getAttribute('value');
//     console.log(x);
//   }
// }
// var d = document.getElementsByClassName('num').value;
// var numb = new calc(d);
// console.log(numb);
// $(function() {
//   $('button').click(function() {
//     console.log($('button').text());
//     $('#inpOut').text(function() {
//       var inp = $('button').val();
//       console.log(inp);
//       return inp;
//       // var oup = $("button").click(function () {
//       //    $("#test").text();
//     });
//     // continue ;
//   });
// });

$(function() {
  $('button').click(function() {
    var i = 0;
    var ib = 0;
    while (i < 3) {
      var fired_button = $(this).val();

      //ib = ib.concat(fired_button);
      ib = '' + ib + fired_button;

      //ib = '${ib}${fired_button}';
      i++;
      // return ib;
    }
    //return ib;
    $('#inpOut').text(ib);
    // var ib = 0;
    // ib = ib + fired_button;

    //for (i = 1; i < 8; i++) {
    //$('#inpOut').text(ib);
    // $('#inpOut').text(function() {
    //   var inp = $(this).val();
    //   return inp;
    //   // var oup = $("button").click(function () {
    //   //    $("#test").text();
    // });
    // continue;
    // }
  });
});

//var inp = document.getElementById('inpOut').value;
// $(function() {
//   var btn = $('.num').click(function() {
//     // action goes here!!
//     var clk = $('.num').val();
//     console.log(clk);

//     return clk;
//   });
//   // alert(btn);
// });
// $('button').onclick = function() {
//   var val = this.value;
//   console.log(val);
//   document.getElementById('inpOut').innerHTML = 'Вы ввели: ' + val;
// };
