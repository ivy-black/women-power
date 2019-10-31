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
function register() {
  event.preventDefault();

  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;
  var checkBox = document.getElementById('terms-cond');
  // var passwordRetype = document.getElementById("rrp").value;

  if (email == '') {
    document.getElementById('alert-mes').innerHTML = 'Email required';
    return;
  } else if (!email.match('@')) {
    document.getElementById('alert-mes').innerHTML = 'Email incorrect';
    return;
  } else if (password == '') {
    document.getElementById('alert-mes').innerHTML = 'Password required';
    return;
  } else if (checkBox.checked == false) {
    document.getElementById('alert-mes').innerHTML =
      'You must agree with Terms and Conditions';
    return;
  }

  // else if (passwordRetype == "") {
  //   alert("Password required.");
  //   return;
  // }
  // else if (password != passwordRetype) {
  //   alert("Password don't match retype your Password.");
  //   return;
  // }
  else if (emailArray.indexOf(email) == -1) {
    emailArray.push(email);
    passwordArray.push(password);

    alert(email + '  Thanks for registration. \nTry to login Now');
    location.href = '../sign-in/index.html';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPassword').value = '';
    // document.getElementById("rrp").value = "";
  } else {
    alert(email + ' is already register.');
    return;
  }
}
