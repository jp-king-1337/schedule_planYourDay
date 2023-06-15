// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 
  // HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  $(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".description").val();

    var timeBlockId = $(this).closest(".time-block").attr("id");

    localStorage.setItem(timeBlockId, userInput);
  })

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  $(document).ready(function () {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    // current hour is 22 right now

    $(".time-block").each(function () {
      // Get hour of time block
      var hour = parseInt($(this).attr("id").split("-")[1])
      // parseInt makes string into integer, string is formed from this (the time block) while selecting the id attribute and splitting it at the - and choosing the second part of the resulting string, the [1] which is actually "9" which is converted to 9 by parseInt


      // time block has id
      // id has number in it
      // div with hour also has number in it
      // pull hour from one of those

      // $(this) is current element - here it is current time block
      // $(this) = $(document.body.children[1].children[0]

      // $(this).attr("id") grabs id
      // (split("-")[1])


      // compare to current hour
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


  // TODO: Add code to display the current date in the header of the page.
});