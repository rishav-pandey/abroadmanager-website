
  function opensection(event, divName) {
	  var i, mycontent, contentlink;
      mycontent = document.getElementsByClassName("mycontent");
      for (i = 0; i < mycontent.length; i++) {
        mycontent[i].style.display = "none";
      }

      contentlink = document.getElementsByClassName("contentlink");
      for (i = 0; i < contentlink.length; i++) {
        contentlink[i].className = contentlink[i].className.replace(" active", "");
      }

      document.getElementById(divName).style.display = "block";
      event.currentTarget.className += " active";
	  
	  if(divName ==='profile'){
		  getDashboardAllData();
	  }
	  
    }

    document.getElementById("defaultOpen").click();

    // FOR DISPLAYING OF DIFFERENT SCORE-CARDS
    function openScore(event, cardName) {
      var tabLink, tabContent;
      tabContent = document.getElementsByClassName("tabContent");
      for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }

      tabLink = document.getElementsByClassName("tabLink");
      for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
      }

      document.getElementById(cardName).style.display = "block";
      event.currentTarget.className += " active";
    }

  // display of university detail on click of button
  function university() {
    $('#university-detail').css("display", "block");
  }

  $('#university-detail').on('mouseover', function () {
    $('#edit').css("display", "block");
  });

  $('#university-detail').on('mouseout', function () {
    $('#edit').css("display", "none");
  });

// ***********************************************************************************************************
// FOR FILLING AND SUBMITING DETAILS OF PROFILE SECTION

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
      lsatTotalScore = parseInt(lsatTotalScore);
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
      mcatTotalScore = parseInt(mcatTotalScore);
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

  
  // FOR STORING ACADEMIC DETAIL DATA ON INPUT
  function academicDetail() {
    var universityName =  $('#universityNameValue').val();
    var universityFrom = $('#universityFromValue').val();
    var universityTo = $('#universityToValue').val();
    var universityDegree = $('#universityDegreeValue').val();
    var universityProgram = $('#universityProgramValue').val();
    var universityGrade = $('#universityGradeValue').val();
    if ((universityName != "") && (universityFrom != "") && (universityTo != "") && (universityDegree != "") && (universityProgram != "") && (universityGrade != "") ) {

      $('#universityName').text(universityName);
      $('#universityFrom').text(universityFrom);
      $('#universityTo').text(universityTo);
      $('#universityDegree').text(universityDegree);
      $('#universityProgram').text(universityProgram);
      $('#universityGrade').text(universityGrade);
      $('#academicDisplay').css('display', 'block');
    }
    else
    {
      alert("Fill all the Details to Proceed!");
    }
  }

  // FOR STORING WORK DETAIL DATA ON INPUT
  function workDetail(months) {
    var workMonth =  months;
    if ((workMonth != "")) {
      $('#workMonth').text(workMonth);
      $('#workDisplay').css('display', 'block');
      $('#work-detail').css('display', 'none');
    }
    else
    {
      alert("Fill all the Details to Proceed!");
    }
  }


// FOR STORING INTERNSHIP DETAIL DATA ON INPUT
  function internshipDetail() {
    var workedAs =  $('#workedAsValue').val();
    var workedFrom = $('#workedFromValue').val();
    var workedTo = $('#workedToValue').val();
    var workedProjectUrl = $('#workedProjectUrlValue').val();
    var workedLocation = $('#workedLocationValue').val();
    if ((workedAs != "") && (workedFrom != "") && (workedTo != "") && (workedProjectUrl != "") && (workedLocation != "") ) {
      $('#workedAs').text(workedAs);
      $('#workedFrom').text(workedFrom);
      $('#workedTo').text(workedTo);
      $('#workedProjectUrl').text(workedProjectUrl);
      $('#workedLocation').text(workedLocation);
      $('#internshipDisplay').css('display', 'block');
    }
    else
    {
      alert("Fill all the Details to Proceed!");
    }
  }

  // FOR STORING RESEARCH DETAIL DATA ON INPUT
  function researchDetail(research,patents) {
    var researchPaper =  research;
    var researchPatent = patents;
    if ((researchPaper != "") && (researchPatent != "")) {
      $('#researchPaper').text(researchPaper);
      $('#researchPatent').text(researchPatent);
      $('#researchDisplay').css('display', 'block');
      $('#research-detail').css('display', 'none');
    }
    else
    {
      alert("Fill all the Details to Proceed!");
    }
  }

  // FOR STORING ADDITIONAL DETAIL DATA ON INPUT
  function additionalDetail(additionalDetails) {
    var additionalInfo =  additionalDetails;
    if ((additionalInfo != "")) {
      $('#additionalInfo').text(additionalInfo);
      $('#additionalDisplay').css('display', 'block');
      $('#more-detail').css('display', 'none');
    }
    else
    {
      alert("Fill all the Details to Proceed!");
    }
  }


// *************************************************************
// OBJECT FORMAT OF DETAIL FOR SAVING AND SENDING FURTHER
// *******************************************************
  finalScoreDetail = {
      greVerbalScore:  null,
      greQuantitativeScore: null ,
      greAnalyticalScore: null ,
      greTotalScore: null ,
      gmatAnalyticalScore: null ,
      gmatIntegratedScore: null ,
      gmatQuantitativeScore: null ,
      gmatVerbalScore: null ,
      gmatTotalScore: null ,
      toeflReadingScore: null ,
      toeflListeningScore: null ,
      toeflSpeakingScore: null ,
      toeflWritingScore: null ,
      toeflTotalScore: null ,
      ieltsReadingScore: null ,
      ieltsListeningScore: null ,
      ieltsSpeakingScore: null ,
      ieltsWritingScore: null ,
      ieltsTotalScore: null ,
      lsatTotalScore: null ,
      mcatTotalScore: null ,
      satEBRWSScore: null ,
      satMathScore: null ,
      satEssayScore: null ,
      satTotalScore: null
    }

    finalAcademicDetail = {
      universityName: "",
      universityFrom: "",
      universityTo: "",
      universityDegree: "",
      universityProgram: "",
      universityGrade: ""
    }

    finalWorkDetail = {
      workMonth: null
    }


    finalInternshipDetail = {
      workedAs: "" ,
      workedFrom: "" ,
      workedTo: "" ,
      workedProjectUrl: "" ,
      workedLocation: ""
    }

    finalResearchDetail = {
      researchPaper: null ,
      researchPatent: null
    }

    finalAdditionalDetail = {
      additionalDetail: ""
    }
// *******************************************************
// OBJECT FORMAT OF DETAIL FOR SAVING AND SENDING FURTHER
// *************************************************************

    // THIS FUNCTION STORES THE DATA IN OBJECT FORMAT
    function addScoreDetail() {
      finalScoreDetail.greVerbalScore = parseInt($('#greVerbalScore').text());
      finalScoreDetail.greQuantitativeScore = parseInt($('#greQuantitativeScore').text());
      finalScoreDetail.greAnalyticalScore = parseInt($('#greAnalyticalScore').text());
      finalScoreDetail.greTotalScore = parseInt($('#greTotalScore').text());
      finalScoreDetail.gmatAnalyticalScore = parseInt($('#gmatAnalyticalScore').text());
      finalScoreDetail.gmatIntegratedScore = parseInt($('#gmatIntegratedScore').text());
      finalScoreDetail.gmatQuantitativeScore = parseInt($('#gmatQuantitativeScore').text());
      finalScoreDetail.gmatVerbalScore = parseInt($('#gmatVerbalScore').text());
      finalScoreDetail.gmatTotalScore = parseInt($('#gmatTotalScore').text());
      finalScoreDetail.toeflReadingScore = parseInt($('#toeflReadingScore').text());
      finalScoreDetail.toeflListeningScore = parseInt($('#toeflListeningScore').text());
      finalScoreDetail.toeflSpeakingScore = parseInt($('#toeflSpeakingScore').text());
      finalScoreDetail.toeflWritingScore = parseInt($('#toeflWritingScore').text());
      finalScoreDetail.toeflTotalScore = parseInt($('#toeflTotalScore').text());
      finalScoreDetail.ieltsReadingScore = parseInt($('#ieltsReadingScore').text());
      finalScoreDetail.ieltsListeningScore = parseInt($('#ieltsListeningScore').text());
      finalScoreDetail.ieltsSpeakingScore = parseInt($('#ieltsSpeakingScore').text());
      finalScoreDetail.ieltsWritingScore = parseInt($('#ieltsWritingScore').text());
      finalScoreDetail.ieltsTotalScore = parseInt($('#ieltsTotalScore').text());
      finalScoreDetail.lsatTotalScore = parseInt($('#lsatTotalScore').text());
      finalScoreDetail.mcatTotalScore = parseInt($('#mcatTotalScore').text());
      finalScoreDetail.satEBRWSScore = parseInt($('#satEBRWSScore').text());
      finalScoreDetail.satMathScore = parseInt($('#satMathScore').text());
      finalScoreDetail.satEssayScore = parseInt($('#satEssayScore').text());
      finalScoreDetail.satTotalScore = parseInt($('#satTotalScore').text());
    }

    // THIS FUNCTION STORES THE DATA IN OBJECT FORMAT
    function addAcademicDetail() {
      finalAcademicDetail.universityName = $('#universityName').text();
      finalAcademicDetail.universityFrom = $('#universityFrom').text();
      finalAcademicDetail.universityTo = $('#universityTo').text();
      finalAcademicDetail.universityDegree = $('#universityDegree').text();
      finalAcademicDetail.universityProgram = $('#universityProgram').text();
      finalAcademicDetail.universityGrade = $('#universityGrade').text();
    }

    // THIS FUNCTION STORES THE DATA IN OBJECT FORMAT
    function addWorkDetail() {
      finalWorkDetail.workMonth = parseInt($('#workMonth').text());
    }

    // THIS FUNCTION STORES THE DATA IN OBJECT FORMAT
    function addInternshipDetail() {
      finalInternshipDetail.workedAs = $('#workedAs').text();
      finalInternshipDetail.workedFrom = $('#workedFrom').text();
      finalInternshipDetail.workedTo = $('#workedTo').text();
      finalInternshipDetail.workedProjectUrl = $('#workedProjectUrl').text();
      finalInternshipDetail.workedLocation = $('#workedLocation').text();
    }

    // THIS FUNCTION STORES THE DATA IN OBJECT FORMAT
    function addResearchDetail() {
      finalResearchDetail.researchPaper = parseInt($('#researchPaper').text());
      finalResearchDetail.researchPatent = parseInt($('#researchPatent').text());
    }

    // THIS FUNCTION STORES THE DATA IN OBJECT FORMAT
    function addAdditionalDetail() {
      finalAdditionalDetail.finalWorkDetail.additionalDetail = $('#additionalDetail').text();
    }

// ***********************************************************************************************************************

    // THIS FUNCTION CHECKS FOR COMPLETE DATA AND SENDS THE SCORE OF PROFILE SECTION IN JASON FORMAT
    function sendScoreDetail() {
      var checkEmpty = false; // Check weather all the data is filled to perform further action
      for (let item in finalScoreDetail) {
        if (finalScoreDetail[item] == "" || finalScoreDetail[item] == null) {
          checkEmpty = true;
        }
      }
      if (checkEmpty == true) {
        alert("Any of the data Empty");
      }
      else
      {
        jQuery.ajax({
          url: '/path/to/file',
          type: "post",
          dataType: "json",
          data: finalScoreDetail,
        })
        .done(function() {
          console.log("success");
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      }
    }

    // THIS FUNCTION CHECKS FOR COMPLETE DATA AND SENDS THE ACADEMIC DETAIL OF PROFILE SECTION IN JASON FORMAT
    function sendAcademicDetail() {
      var checkEmpty = false; // Check weather all the data is filled to perform further action
      for (let item in finalAcademicDetail) {
        if (finalAcademicDetail[item] == "" || finalAcademicDetail[item] == null) {
          checkEmpty = true;
        }
      }
      if (checkEmpty == true) {
        alert("Any of the data Empty");
      }
      else
      {
        jQuery.ajax({
          url: '/path/to/file',
          type: "post",
          dataType: "json",
          data: finalAcademicDetail,
        })
        .done(function() {
          console.log("success");
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      }
    }

    // THIS FUNCTION CHECKS FOR COMPLETE DATA AND SENDS THE WORK DETAIL OF PROFILE SECTION IN JASON FORMAT
    function sendWorkDetail() {
      var checkEmpty = false; // Check weather all the data is filled to perform further action
      for (let item in finalWorkDetail) {
        if (finalWorkDetail[item] == "" || finalWorkDetail[item] == null) {
          checkEmpty = true;
        }
      }
      if (checkEmpty == true) {
        alert("Any of the data Empty");
      }
      else
      {
        jQuery.ajax({
          url: '/path/to/file',
          type: "post",
          dataType: "json",
          data: finalWorkDetail,
        })
        .done(function() {
          console.log("success");
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      }
    }

    // THIS FUNCTION CHECKS FOR COMPLETE DATA AND SENDS THE INTERNSHIP DETAIL OF PROFILE SECTION IN JASON FORMAT
    function sendInternshipDetail() {
      var checkEmpty = false; // Check weather all the data is filled to perform further action
      for (let item in finalInternshipDetail) {
        if (finalInternshipDetail[item] == "" || finalInternshipDetail[item] == null) {
          checkEmpty = true;
        }
      }
      if (checkEmpty == true) {
        alert("Any of the data Empty");
      }
      else
      {
        jQuery.ajax({
          url: '/path/to/file',
          type: "post",
          dataType: "json",
          data: finalInternshipDetail,
        })
        .done(function() {
          console.log("success");
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      }
    }

    // THIS FUNCTION CHECKS FOR COMPLETE DATA AND SENDS THE RESEARCH DETAIL OF PROFILE SECTION IN JASON FORMAT
    function sendResearchDetail() {
      var checkEmpty = false; // Check weather all the data is filled to perform further action
      for (let item in finalResearchDetail) {
        if (finalResearchDetail[item] == "" || finalResearchDetail[item] == null) {
          checkEmpty = true;
        }
      }
      if (checkEmpty == true) {
        alert("Any of the data Empty");
      }
      else
      {
        jQuery.ajax({
          url: '/path/to/file',
          type: "post",
          dataType: "json",
          data: finalResearchDetail,
        })
        .done(function() {
          console.log("success");
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      }
    }

    // THIS FUNCTION CHECKS FOR COMPLETE DATA AND SENDS THE ADDITIONAL DETAIL OF PROFILE SECTION IN JASON FORMAT
    function sendAdditionalDetail() {
      var checkEmpty = false; // Check weather all the data is filled to perform further action
      for (let item in finalAdditionalDetail) {
        if (finalAdditionalDetail[item] == "" || finalAdditionalDetail[item] == null) {
          checkEmpty = true;
        }
      }
      if (checkEmpty == true) {
        alert("Any of the data Empty");
      }
      else
      {
        jQuery.ajax({
          url: '/path/to/file',
          type: "post",
          dataType: "json",
          data: finalAdditionalDetail,
        })
        .done(function() {
          console.log("success");
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      }
    }

    // THIS FUNCTION CALL AL THE OTHER SENDING FUNCTION ON CLICK OF SUBMIT DETAIL FUNCTION IN PROFILE SECTION
    function sendProfileDetails() {
      sendScoreDetail();
      sendAcademicDetail();
      sendWorkDetail();
      sendInternshipDetail();
      sendResearchDetail();
      sendAdditionalDetail();
    }

// FOR FILLING AND SUBMITING DETAILS OF PROFILE SECTION
// ***********************************************************************************************************

// ***********************************************************************************************************
// FOR FILLING AND SUBMITING DETAILS OF EDIT-DOCUMENTS SECTION

  finalEditDocument = {
      details: ""
    }

function sendEditDocumentDetails() {
  // if ($('editDocument').val() == "" || $('editDocument').val() == null) {
  //   alert($('editDocument').val());
  // }
  var editDocument = document.getElementById('editDocumentValue').value;
  if (editDocument == "") {
    alert("Fill all the Details to Proceed Further!");
  }
  else
  {
    finalEditDocument.details = editDocument;
    jQuery.ajax({
      url: '/path/to/file',
      type: "post",
      dataType: "json",
      data: finalEditDocument,
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

}

// FOR FILLING AND SUBMITING DETAILS OF EDIT-DOCUMENTS SECTION
// ***********************************************************************************************************

/*         DASHBOARD RELATED CALLS START HERE */

	var mainUrl = "https://2e0a1425.ngrok.io/Dashboard";
	var dashboardUrl = "/dashboard/profile/get";
	var tokenValue = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoiZW1haWwiLCJuYW1lIjoibmFtZSJ9.r_fKc4VfQfuiSpagIsMU6K4sEVbFdSCBUh_ysnmLqmboV8iQBy1SfGQ7mqOZfrg1n-hHOZ1qPGlNMJwhcPd1XA"
	
	
	var dashboardObj = null;

  function createAcademicTemplate(university){
     return ""+
            "<div class='displayData'>"+
              "<ul>"+
                "<li>"+
                  "<strong>University Name:</strong>"+
                  "<em><strong>"+validateString(university.universityName)
                  +"</strong></em>"+
                "</li>"+
                "<li>"+
                  "<strong>From:</strong>"+
                  "<em><strong>"+validateString(university.startDate)+"</strong></em>"+
                "</li>"+
                "<li>"+
                  "<strong>To:</strong>"+
                  "<em><strong>"+validateString(university.endDate)+"</strong></em>"+
                "</li>"+
                "<li>"+
                  "<strong>Degree:</strong>"+
                  "<em><strong>"+validateString(university.degree)+"</strong></em>"+
                "</li>"+
                "<li>"+
                  "<strong>Program:</strong>"+
                  "<em><strong>"+validateString(university.program)+"</strong></em>"+
                "</li>"+
                "<li>"+
                  "<strong>Your Grade:</strong>"+
                  "<em><strong>"+validateString(university.grade)+"</strong></em>"+
                "</li>"+
              "</ul>"+
            "</div>"+
            "<div class='edit-displayData'>"+
              "<span class='fa fa-edit' data-toggle='modal' data-target='#academicModal'></span>"+
            "</div>";
  }

  function setAcademicDetails(qualifications){
    console.log("Setting academic details");
    var academicDisplay = $("#academicDisplay");
    for(i=0;i<qualifications.length;i++){
      var node = createAcademicTemplate(qualifications[i]);
      academicDisplay.append(node);
    }
    $('#academicDisplay').css('display', 'block');
    console.log(academicDisplay);
  }

  function createInternshipTemplate(internship){
    return "" +
    "<div class='displayData'>"+
      "<ul>"+
        "<li>"+
          "<strong>Worked As:</strong>"+
          "<em><strong id='workedAs'>"+validateString(internship.jobTitle)+"</strong></em>"+
        "</li>"+
        "<li>"+
          "<strong>From:</strong>"+
          "<em><strong id='workedFrom'>"+validateString(internship.startDate)+"</strong></em>"+
        "</li>"+
        "<li>"+
          "<strong>To:</strong>"+
          "<em><strong id='workedTo'>"+validateString(internship.endDate)+"</strong></em>"+
        "</li>"+
        "<li>"+
          "<strong>Project URL:</strong>"+
          "<em><strong id='workedProjectUrl'>"+validateString(internship.url)+"</strong></em>"+
        "</li>"+
        "<li>"+
          "<strong>Location:</strong>"+
          "<em><strong id='workedLocation'>"+validateString(internship.location)+"</strong></em>"+
        "</li>"+
      "</ul>"+
    "</div>"+
    "<div class='edit-displayData'>"+
      "<span class='fa fa-edit' data-toggle='modal' data-target='#internshipModal'></span>"+
    "</div>";
  }

  function setInternships(internships){
    console.log("Setting Internships");
    var internshipDisplay = $("#internshipDisplay");
    for(i=0;i<internships.length;i++){
      console.log(internships[i]);
      var node = createInternshipTemplate(internships[i]);
      console.log(node);
      internshipDisplay.append(node);
    }
    $('#internshipDisplay').css('display', 'block');
    console.log(internshipDisplay);
  }


  function setGreScore(gre){
    $('#greVerbalScore').text(validateString(gre.VerbalScore));
    $('#greQuantitativeScore').text(validateString(gre.QuantitativeScore));
    $('#greAnalyticalScore').text(validateString(gre.AnalyticalScore));
    $('#greTotalScore').text(validateString(gre.TotalScore));
  }

  function setGmatScore(gmat){
      $('#gmatAnalyticalScore').text(validateString(gmat.AnalyticalScore));
      $('#gmatIntegratedScore').text(validateString(gmat.IntegratedScore));
      $('#gmatQuantitativeScore').text(validateString(gmat.QuantitativeScore));
      $('#gmatVerbalScore').text(validateString(gmat.VerbalScore));
      $('#gmatTotalScore').text(validateString(gmat.TotalScore));
  }

  function setToeflScore(toefl){
      $('#toeflReadingScore').text(validateString(toefl.ReadingScore));
      $('#toeflListeningScore').text(validateString(toef.ListeningScore));
      $('#toeflSpeakingScore').text(validateString(toefl.SpeakingScore));
      $('#toeflWritingScore').text(validateString(toefl.WritingScore));
      $('#toeflTotalScore').text(validateString(toefl.TotalScore));
  }


  function ieltsScore(ielts){
      $('#ieltsReadingScore').text(validateString(ielts.ReadingScore));
      $('#ieltsListeningScore').text(validateString(ielts.ListeningScore));
      $('#ieltsSpeakingScore').text(validateString(ielts.SpeakingScore));
      $('#ieltsWritingScore').text(validateString(ielts.WritingScore));
      $('#ieltsTotalScore').text(validateString(ielts.TotalScore));
  }

  function setMcatScore(mcat){
      $('#mcatTotalScore').text(validateString(mcat.TotalScore));
  }

  function setLsatTotalScore(lsat){
      $('#lsatTotalScore').text(validateString(lsat.TotalScore));
  }

  function setSatScore(sat){
      $('#satEBRWSScore').text(validateString(sat.EBRWSScore));
      $('#satMathScore').text(validateString(sat.MathScore));
      $('#satEssayScore').text(validateString(sat.EssayScore));
      $('#satTotalScore').text(validateString(sat.TotalScore));
  }

  function setScores(scores){
      for(i=0;i<scores.length;i++){
        if(scores[i].type==='gre'){
          setGreScore((scores[i].score));
        }
        if(scores[i].type==='gmat'){
          setGmatScore(scores[i].score);
        }
        if(scores[i].type==='toefl'){
          setToeflScore(scores[i].score);
        }
        if(scores[i].type==='lsat'){
          setLsatTotalScore(scores[i].score);
        }
        if(scores[i].type==='mcat'){
          setMcatScore(scores[i].score);
        }
        if(scores[i].type==='sat'){
          setSatScore(scores[i].score);
        }
      }
  }


	function getDashboardAllData(){
    console.log("getting dashboard data");
		$.ajax({
			url:mainUrl+dashboardUrl,
			type:'GET',
			dataType:'json',
			headers: { jwttoken: tokenValue },
			success: function(data){
				if(data.isSuccess === true){
					dashboardObj = data.data[0];
					console.log(dashboardObj);
					setDashboardAllData(dashboardObj);
				}
				else{
					console.log("Something not right");
				}
			}
		});
	}
	
	function setDashboardAllData(dashboardObj){
		if(dashboardObj !== null){
			workDetail(dashboardObj.profileDTO.workExp);
			additionalDetail(dashboardObj.profileDTO.info);
      researchDetail(dashboardObj.profileDTO.research, dashboardObj.profileDTO.patents);
      setAcademicDetails(dashboardObj.qualifications);
      setInternships(dashboardObj.internships);
      setScores(dashboardObj.scores);
    }
	}
$('sendDetails').on('click', function sendEditDocumentDetails(){
		var sendD = $('#editDocumentValue').val();
		
		$.ajax({
			type:'POST',
			url:'https://77f0ad5d.ngrok.io/Dashboard/dashboard/documentrequest/send',
			data: sendD,
			success: function(data){
				
				console.log(data);
			}
		});
	});
	
	$('#financial-help-submit').on('click', function(){
		var formData= {
			'applicantName': $('input[name=name]').val(),
			'applicantContact': $('input[name=contact]').val(),
			'applicantBirthDate': $('input[name=birthdate]').val(),
			'profile': $('input[name=profile]').val(),
			'coapplicantFullName': $('input[name=full-name]').val(),
			'annualIncome': $('input[name=annual-income]').val(),
			'relationship': $('input[name=relationship]').val(),
			'collateralDetails': $('input[name=collateral-details]').val(),
			'collateral': $('input[name=will-provide-collateral]').val(),
			'collateralType': $('input[name=collateral-type]').val(),
			'estimatedValue': $('input[name=estimated-value]').val(),
		}
		
		$.ajax({
			type:'POST',
			url:'https://77f0ad5d.ngrok.io/Dashboard/dashboard/financialhelp/send',
			data: formData,
			dataType:'json',
			encode: true,
			
		});
		done(function(data){
			console.log(data);
		});
		event.preventDefault();
	});	
  
/*------------------------ENDS--------------------------------------*/

  /* HELPER functions*/

  function validateString(string){
    return (string===null || string === undefined )?"-":string;
  }

  function validateInteger(integer){
    return integer===0?"-":integer;
  }


/*--------------MAIN FUNCTION STARTS HERE----------*/
	$(document).ready(function(){
		
  });