function switchTabs(number) {
  if (number === 1) {
    $('#loginTab').addClass("active-tab");
    $('#registerTab').removeClass("active-tab");
      document.getElementById('login-form').style.display = "block";
      document.getElementById('register-form').style.display = "none";
    console.log('login');
  }
  if (number === 2) {
    $('#registerTab').addClass("active-tab");
    $('#loginTab').removeClass("active-tab");
      document.getElementById('register-form').style.display = "block";
      document.getElementById('login-form').style.display = "none";
    console.log('register');
  }
}

function displayLogin() {
  document.getElementById('login-screen').style.display = "block";
}

function closeLogin() {
  document.getElementById('login-screen').style.display = "none";
}
