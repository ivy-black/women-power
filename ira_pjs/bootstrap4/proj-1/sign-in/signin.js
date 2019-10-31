// function getAccountDet() {
//   var x = $('#inputEmail');
//   var text = '';
//   var i;
//   for (i = 0; i < x.length; i++) {
//     text += x.elements[i].value + '<br>';
//   }
//   document.getElementById('demo2').innerHTML = text;
// }
var emailArray = [];
var passwordArray = [];

// var loginBox = document.getElementById("login");
// var regBox = document.getElementById("register");
// var forgetBox = document.getElementById("forgot");

// var loginTab = document.getElementById("lt");
// var regTab = document.getElementById("rt");
function login() {
  event.preventDefault();

  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;

  var i = emailArray.indexOf(email);

  if (emailArray.indexOf(email) == -1) {
    if (email == '') {
      //alert('Email required.');
      document.getElementById('alert-mes').innerHTML = 'Email required';
      return;
    }
    //alert('Email does not exist.');
    document.getElementById('alert-mes').innerHTML = 'Email does not exist';
    return;
  } else if (passwordArray[i] != password) {
    if (password == '') {
      //alert('Password required.');
      document.getElementById('alert-mes').innerHTML = 'Password required';
      return;
    }
    alert('Password does not match.');
    return;
  } else {
    alert(email + ' yor are login Now \n welcome to our website.');

    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPassword').value = '';
    return;
  }
}
