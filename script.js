$(".fortuneContainer").hide();
$(".images").hide();
$("button").click(function () {
    $(".questionsContainer").hide();
    $(".fortuneContainer").show();
    $(".images").show();
    var userName = $(".name").val();
    var userBirthyear = $(".birthyear").val();
    userBirthyear = 2065 - userBirthyear;
    var userPet = $(".pet").val();
    var sentenceStart = ", by the year 2065 you will be ";
    var sentenceMiddle = " and a ";
    var sentenceEnd = " professional!";
    $(".fortune").append(userName + sentenceStart + userBirthyear + sentenceMiddle + userPet + sentenceEnd);
});