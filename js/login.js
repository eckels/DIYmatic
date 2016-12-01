function switchTabs(number) {
  if (number === 1) {
    $('#loginTab').addClass("active-tab");
    $('#registerTab').removeClass("active-tab");
      document.getElementById('login-form').style.display = "block";
      document.getElementById('register-form').style.display = "none";
  }
  if (number === 2) {
    $('#registerTab').addClass("active-tab");
    $('#loginTab').removeClass("active-tab");
      document.getElementById('register-form').style.display = "block";
      document.getElementById('login-form').style.display = "none";
  }
}

function displayLogin() {
  document.getElementById('login-screen').style.display = "block";
}

function closeLogin() {
  document.getElementById('login-screen').style.display = "none";
}

$(document).ready(function() {
    console.log('ready');
  $('#filter').change(function() {
      var choice = $(this).val();
    filterItems();
    function filterItems() {
        var selectedHashtag = choice;
        var allImages = document.getElementsByClassName("guide");
        var selectedImages = document.getElementsByClassName(choice);
        var allImageIndex;
        var selectedImageIndex;
      for (allImageIndex = 0; allImageIndex < allImages.length; allImageIndex++) {
        allImages[allImageIndex].style.display = "none";
      }
      for (selectedImageIndex = 0; selectedImageIndex < selectedImages.length; selectedImageIndex++) {
        selectedImages[selectedImageIndex].style.display = "inline-block";
      }
    }
    if (choice === "all") {
      choice = "guide";
      filterItems();
    }
  });
});
