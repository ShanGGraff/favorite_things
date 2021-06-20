//Business Logic
  
//UserInterface Logic
$(document).ready(function() {
  $("form#info").submit(function(event) {
    const question1 = $("#question1").val();
    const question2 = $("#question2").val();
    const question3 = $("#question3").val();
    const question4 = $("#question4").val();

    const usedThings = [];
    const favoriteThings = [question1, question2, question3, question4];
    usedThings.push(question1, question2, question3);

    $(".drink").text(usedThings[1]);
    $(".color").text(usedThings[0]);
    $(".spice").text(usedThings[2]);
    $(".answers").show();

    event.preventDefault();
  });
});