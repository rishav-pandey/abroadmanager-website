// popup the suggestion bar
  $('#question').on('click', function () {
    $('#suggestion').css("display", "block");
  });

  var suggestionValue1 = "Post your Profile: \nGRE/GMAT/XYZ = \nAcademic Qualification: \nWork Experience: \nInternships: \nResearch Papers: \nPatents: \nAdditional Information: "
  var suggestionValue2 = "Admit Date: DD/MM/YYYY "
  var suggestionValue3 = "Review Date: DD/MM/YYYY "
  var suggestionValue4 = "Applied Date: DD/MM/YYYY "

  $('#suggestion-btn1').on('click', function () {
    $('#question-area').val("");
    $('#question-area').val(suggestionValue1);
    $('#suggestion').css("display", "none");
  });

  $('#suggestion-btn2').on('click', function () {
    $('#question-area').val("");
    $('#question-area').val(suggestionValue2);
    $('#suggestion').css("display", "none");
  });

  $('#suggestion-btn3').on('click', function () {
    $('#question-area').val("");
    $('#question-area').val(suggestionValue3);
    $('#suggestion').css("display", "none");
  });

  $('#suggestion-btn4').on('click', function () {
    $('#question-area').val("");
    $('#question-area').val(suggestionValue4);
    $('#suggestion').css("display", "none");
  });
