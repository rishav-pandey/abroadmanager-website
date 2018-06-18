// popup the suggestion bar

  var checkEmpty = false;
  $('#question').on('click', function () {
    $('#suggestion').css("display", "block");
     if ($('#question-area').val() == "") {
      checkEmpty = true;
    }
    else
      checkEmpty = false;
  });

  var suggestionValue1 = "Post your Profile: \nGRE/GMAT/XYZ = \nAcademic Qualification: \nWork Experience: \nInternships: \nResearch Papers: \nPatents: \nAdditional Information: "
  var suggestionValue2 = "Admit Date: DD/MM/YYYY "
  var suggestionValue3 = "Review Date: DD/MM/YYYY "
  var suggestionValue4 = "Applied Date: DD/MM/YYYY "

  $('#suggestion-btn1').on('click', function () {
    if (checkEmpty == true) {
    $('#question-area').val("");
    $('#question-area').val(suggestionValue1);
    $('#suggestion').css("display", "none");
    }
    else
      $('#question-area').val( $('#question-area').val() + "\n \n" + suggestionValue1);
  });

  $('#suggestion-btn2').on('click', function () {
    if (checkEmpty == true) {
    $('#question-area').val("");
    $('#question-area').val(suggestionValue2);
    $('#suggestion').css("display", "none");
    }
    else
      $('#question-area').val( $('#question-area').val() + "\n \n" + suggestionValue2);
  });

  $('#suggestion-btn3').on('click', function () {
    if (checkEmpty == true) {
    $('#question-area').val("");
    $('#question-area').val(suggestionValue3);
    $('#suggestion').css("display", "none");
    }
    else
      $('#question-area').val( $('#question-area').val() + "\n \n" + suggestionValue3);
  });

  $('#suggestion-btn4').on('click', function () {
    if (checkEmpty == true) {
    $('#question-area').val("");
    $('#question-area').val(suggestionValue4);
    $('#suggestion').css("display", "none");
    }
    else
      $('#question-area').val( $('#question-area').val() + "\n \n" + suggestionValue4);
  });
