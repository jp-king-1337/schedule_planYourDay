$(function () {
  $(".saveBtn").on("click", function btnClick() {
    var userInput = $(this).siblings(".description").val();

    var timeBlockId = $(this).closest(".time-block").attr("id");

    localStorage.setItem(timeBlockId, userInput);
  })

  $(document).ready(function hourCalc() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var hour = parseInt($(this).attr("id").split("-")[1])

      if (hour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (hour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    })
  });

  $(document).ready(function loadUserInput() {
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var userInput = localStorage.getItem(timeBlockId);

      $(this).find(".description").val(userInput);
    });
  });

  // TODO: Add code to display the current date in the header of the page.
  function displayCurrentDate() {
    // Using a modified version of ISO 8601, with T removed because I want the legibility of 8601 without the T. Bite me ISO (jk I love you ISO)
    var currentDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    $("#currentDay").text("Current Date and Time: " +currentDate);
  }

  displayCurrentDate();

  // BOOM now the time also updates every second!!!
  setInterval(displayCurrentDate, 1000);
});

console.log(dayjs().format("HH:mm D MMMM YYYY"));
console.log(dayjs().format("YYYY MMMM D HH:mm"));
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));

