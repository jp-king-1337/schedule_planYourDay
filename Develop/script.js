$(function () {
  function displayCurrentDate() {
    var currentDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    $("#currentDay").text("Current Date and Time: " + currentDate);
  }


  $(".saveBtn").on("click", function btnClick() {
    var userInput = $(this).siblings(".description").val();

    var timeBlockId = $(this).closest(".time-block").attr("id");

    localStorage.setItem(timeBlockId, userInput);
  })


  var currentHour = dayjs().hour();
  $(".time-block").each(function hourCalc() {
    var hour = parseInt($(this).attr("id").split("-")[1])

    if (hour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (hour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });


  $(".time-block").each(function loadUserInput() {
    var timeBlockId = $(this).attr("id");
    var userInput = localStorage.getItem(timeBlockId);

    $(this).find(".description").val(userInput);
  });


  displayCurrentDate();
  // Updates the time display every second.
  setInterval(displayCurrentDate, 1000);
});