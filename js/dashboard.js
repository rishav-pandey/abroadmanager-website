
// FOR CALCULATING AND STORING SCORE OF GRE EXAMS
function greScore() {
  var greVerbalScore =  $('#greVerbalScoreValue').val();
  var greQuantitativeScore = $('#greQuantitativeScoreValue').val();
  var greAnalyticalScore = $('#greAnalyticalScoreValue').val();
  if ((greVerbalScore != "") && (greQuantitativeScore != "") && (greAnalyticalScore != "")) {
    greVerbalScore = parseInt(greVerbalScore);
    greQuantitativeScore = parseInt(greQuantitativeScore);
    greAnalyticalScore = parseInt(greAnalyticalScore);
    if ((greVerbalScore >= 130 && greVerbalScore <= 170) && (greQuantitativeScore >= 130 && greQuantitativeScore <= 170) && (greAnalyticalScore >= 0 && greAnalyticalScore <= 6)) {
      $('#greVerbalScore').text(greVerbalScore);
      $('#greQuantitativeScore').text(greQuantitativeScore);
      $('#greAnalyticalScore').text(greAnalyticalScore);
      var greTotal = greVerbalScore + greQuantitativeScore + greAnalyticalScore;
      $('#greTotalScore').text(greTotal);
    }
    else
    {
      alert("Please Input the Scores in Valid Range to Proceed Further: \n Verbal Score: 130 - 170 \n Quantitative Score: 130 - 170 \n Analytical Writing: 0 - 6\n");
    }
  }
  else
  {
    alert("Fill all the Score to Proceed!");
  }
}

// FOR CALCULATING AND STORING SCORE OF GMAT EXAMS
function gmatScore() {
  var gmatAnalyticalScore = $('#gmatAnalyticalScoreValue').val();
  var gmatIntegratedScore =  $('#gmatIntegratedScoreValue').val();
  var gmatQuantitativeScore = $('#gmatQuantitativeScoreValue').val();
  var gmatVerbalScore =  $('#gmatVerbalScoreValue').val();
  if ((gmatVerbalScore != "") && (gmatIntegratedScore != "") && (gmatQuantitativeScore != "") && (gmatAnalyticalScore != "")) {
    gmatAnalyticalScore = parseInt(gmatAnalyticalScore);
    gmatIntegratedScore = parseInt(gmatIntegratedScore);
    gmatQuantitativeScore = parseInt(gmatQuantitativeScore);
    gmatVerbalScore = parseInt(gmatVerbalScore);
    if ((gmatVerbalScore >= 0 && gmatVerbalScore <= 60) && (gmatIntegratedScore >= 1 && gmatIntegratedScore <= 8) && (gmatQuantitativeScore >= 0 && gmatQuantitativeScore <= 60) && (gmatAnalyticalScore >= 0 && gmatAnalyticalScore <= 8)) {
      $('#gmatAnalyticalScore').text(gmatAnalyticalScore);
      $('#gmatIntegratedScore').text(gmatIntegratedScore);
      $('#gmatQuantitativeScore').text(gmatQuantitativeScore);
      $('#gmatVerbalScore').text(gmatVerbalScore);
      var gmatTotal = gmatVerbalScore + gmatIntegratedScore + gmatQuantitativeScore + gmatAnalyticalScore;
      $('#gmatTotalScore').text(gmatTotal);
    }
    else
    {
      alert("Please Input the Scores in Valid Range to Proceed Further: \n Analytical Writing Assessment: 0 - 6 \n Integrated Reasoning: 0 - 6 \n Quantitative: 130 - 170 \n Verbal: 130 - 170 ");
    }
  }
  else
  {
    alert("Fill all the Score to Proceed!");
  }
}


// FOR CALCULATING AND STORING SCORE OF TOEFL EXAMS
function toeflScore() {
  var toeflReadingScore = $('#toeflReadingScoreValue').val();
  var toeflListeningScore =  $('#toeflListeningScoreValue').val();
  var toeflSpeakingScore = $('#toeflSpeakingScoreValue').val();
  var toeflWritingScore =  $('#toeflWritingScoreValue').val();
  if ((toeflWritingScore != "") && (toeflListeningScore != "") && (toeflSpeakingScore != "") && (toeflReadingScore != "")) {
    toeflReadingScore = parseInt(toeflReadingScore);
    toeflListeningScore = parseInt(toeflListeningScore);
    toeflSpeakingScore = parseInt(toeflSpeakingScore);
    toeflWritingScore = parseInt(toeflWritingScore);
    if ((toeflWritingScore >= 0 && toeflWritingScore <= 30) && (toeflListeningScore >= 0 && toeflListeningScore <= 30) && (toeflSpeakingScore >= 0 && toeflSpeakingScore <= 30) && (toeflReadingScore >= 0 && toeflReadingScore <= 30)) {
      $('#toeflReadingScore').text(toeflReadingScore);
      $('#toeflListeningScore').text(toeflListeningScore);
      $('#toeflSpeakingScore').text(toeflSpeakingScore);
      $('#toeflWritingScore').text(toeflWritingScore);
      var toeflTotal = toeflWritingScore + toeflListeningScore + toeflSpeakingScore + toeflReadingScore;
      $('#toeflTotalScore').text(toeflTotal);
    }
    else
    {
      alert("Please Input the Scores in Valid Range to Proceed Further: \n Reading : 0 - 30 \n Listening : 0 - 30 \n Speaking: 0 - 30 \n Writing: 0 - 30 ");
    }
  }
  else
  {
    alert("Fill all the Score to Proceed!");
  }
}


// FOR CALCULATING AND STORING SCORE OF IELTS EXAMS
function ieltsScore() {
  var ieltsReadingScore = $('#ieltsReadingScoreValue').val();
  var ieltsListeningScore =  $('#ieltsListeningScoreValue').val();
  var ieltsSpeakingScore = $('#ieltsSpeakingScoreValue').val();
  var ieltsWritingScore =  $('#ieltsWritingScoreValue').val();
  if ((ieltsWritingScore != "") && (ieltsListeningScore != "") && (ieltsSpeakingScore != "") && (ieltsReadingScore != "")) {
    ieltsReadingScore = parseInt(ieltsReadingScore);
    ieltsListeningScore = parseInt(ieltsListeningScore);
    ieltsSpeakingScore = parseInt(ieltsSpeakingScore);
    ieltsWritingScore = parseInt(ieltsWritingScore);
    if ((ieltsWritingScore >= 1 && ieltsWritingScore <= 9) && (ieltsListeningScore >= 1 && ieltsListeningScore <= 9) && (ieltsSpeakingScore >= 1 && ieltsSpeakingScore <= 9) && (ieltsReadingScore >= 1 && ieltsReadingScore <= 9)) {
      $('#ieltsReadingScore').text(ieltsReadingScore);
      $('#ieltsListeningScore').text(ieltsListeningScore);
      $('#ieltsSpeakingScore').text(ieltsSpeakingScore);
      $('#ieltsWritingScore').text(ieltsWritingScore);
      var ieltsTotal = ieltsWritingScore + ieltsListeningScore + ieltsSpeakingScore + ieltsReadingScore;
      $('#ieltsTotalScore').text(ieltsTotal);
    }
    else
    {
      alert("Please Input the Scores in Valid Range to Proceed Further: \n Reading : 1 - 9 \n Listening : 1 - 9 \n Speaking: 1 - 9 \n Writing: 1 - 9 ");
    }
  }
  else
  {
    alert("Fill all the Score to Proceed!");
  }
}


// FOR CALCULATING AND STORING SCORE OF LSAT EXAMS
function lsatScore() {
  var lsatTotalScore =  $('#lsatTotalScoreValue').val();
  if (lsatTotalScore != "") {
    lsatVerbalScore = parseInt(lsatTotalScore);
    if ((lsatTotalScore >= 120 && lsatTotalScore <= 180)) {
      $('#lsatTotalScore').text(lsatTotalScore);
    }
    else
    {
      alert("Please Input the Scores in Valid Range to Proceed Further: \n Total Score: 120 - 180 ");
    }
  }
  else
  {
    alert("Fill all the Score to Proceed!");
  }
}


// FOR CALCULATING AND STORING SCORE OF MCAT EXAMS
function mcatScore() {
  var mcatTotalScore =  $('#mcatTotalScoreValue').val();
  if (mcatTotalScore != "") {
    mcatVerbalScore = parseInt(mcatTotalScore);
    if ((mcatTotalScore >= 472 && mcatTotalScore <= 528)) {
      $('#mcatTotalScore').text(mcatTotalScore);
    }
    else
    {
      alert("Please Input the Scores in Valid Range to Proceed Further: \n Total Score: 472 - 528 ");
    }
  }
  else
  {
    alert("Fill all the Score to Proceed!");
  }
}


// FOR CALCULATING AND STORING SCORE OF SAT EXAMS
function satScore() {
  var satEBRWSScore =  $('#satEBRWSScoreValue').val();
  var satMathScore = $('#satMathScoreValue').val();
  var satEssayScore = $('#satEssayScoreValue').val();
  if ((satEBRWSScore != "") && (satMathScore != "") && (satEssayScore != "")) {
    satEBRWSScore = parseInt(satEBRWSScore);
    satMathScore = parseInt(satMathScore);
    satEssayScore = parseInt(satEssayScore);
    if ((satEBRWSScore >= 200 && satEBRWSScore <= 800) && (satMathScore >= 200 && satMathScore <= 800) && (satEssayScore >= 2 && satEssayScore <= 8)) {
      $('#satEBRWSScore').text(satEBRWSScore);
      $('#satMathScore').text(satMathScore);
      $('#satEssayScore').text(satEssayScore);
      var satTotal = satEBRWSScore + satMathScore + satEssayScore;
      $('#satTotalScore').text(satTotal);
    }
    else
    {
      alert("Please Input the Scores in Valid Range to Proceed Further: \n EBRWS Score: 200 - 800 \n Math Score: 200 - 800 \n Essay Score: 2 - 8\n");
    }
  }
  else
  {
    alert("Fill all the Score to Proceed!");
  }
}
