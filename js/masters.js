// popup the suggestion bar
  $('#question').on('click', function () {
    $('#suggestion').css("display", "block");
  });

  var suggestionValue1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
  var suggestionValue2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
  var suggestionValue3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
  var suggestionValue4 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "

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
