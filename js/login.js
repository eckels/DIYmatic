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
var matCounter = 2;
var stepCounter = 2;
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

  $('#materialbutton').click(function() {
      $('#materialbutton').before('<input type="text" class="text-small" id="material' + matCounter + '"><br>');
      matCounter++;
  });

  $('#addStep').click(function() {
    $('#addStep').before('<h5>Step ' + stepCounter + ' Instructions</h5><textarea class="text-step" id="steptext' + stepCounter + '"></textarea><h5>Step Picture</h5><input type="file" class="file-step" id="pictext1">');
    stepCounter++;
  });

    $(".materials a").click(function() {
      var selected = $(this).html();
        var link1 = "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + selected;
        console.log(selected);
          window.open(link1, '_blank');
    });
});
