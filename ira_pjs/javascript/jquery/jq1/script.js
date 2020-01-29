$(function() {
  $('.second').css({ color: 'red', 'font-size': '35px' });
  var id = $('h1').data('id');
  // var id2 = $('h1').('id');
  console.log(id);
  $('[title$="word"]').css({ color: 'red' });

  $('ul li:first').css({ color: 'green' });
  $('ul li:nth-child(3)').css({ color: 'pink' });
  //   $('button').click(function() {
  //     alert('test');
  //   });
  //   $('button').on('click', function() {
  //     alert('alert');
  //   });
  //   $('button').dblclick(function() {
  //     alert('double alert');
  //   });
  $('button').on('dblclick', function() {
    alert('dblclick');
  });
  $('button').on('mouseenter', function() {
    alert('mouse');
  });
  $('input[name="name"]').change(function() {
    alert('was changed');
  });
});
