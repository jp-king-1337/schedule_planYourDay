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


  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  // HINT: How can the id attribute of each time-block be used to do this?
  $(document).ready(function loadUserInput() {
    // starting like before - may be able to merge this with the previous TODO code
    $(".time-block").each(function () {
      // timeBlockId already declared on line 8 - not sure if problem. Think I'm just using it again but within this? Maybe I can declare it globally
      var timeBlockId = $(this).attr("id");

      var userInput = localStorage.getItem(timeBlockId);

      $(this).find(".description").val(userInput);
    });
  });

  // TODO: Add code to display the current date in the header of the page.
});