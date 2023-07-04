// Get Current Time
var currentHour = dayjs().format("D/MM/YYYY/HA");
$("#currentDay").text(currentHour);

//Set Start Time and End Time
var startTime = dayjs().startOf("day").hour(8);
var endTime = dayjs().startOf("day").hour(18);

//Create Loop That Fills Out Scheduler
function createSchedule() {
  for (hour = startTime; hour < endTime; hour++) {
    console.log("test" + hour);
  }
}

createSchedule();

//Get HTML Loaded and Added Event Listner to Save Button
$(document).ready(function () {
  var saveButtonEl = $(".saveBtn");
  saveButtonEl.on("click", function () {
    console.log("TEST");
  });
});

{
  // Below is Code to Re-Create. Changed ID to Hour-Block from HTML Source
  /* <div id="hour-Block" class="row time-block past">
<div class="col-2 col-md-1 hour text-center py-3">9AM</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>
</div> */
}
// PSUEDO
// display today targeting current day (DONE)
//figure out start time (Done)
// create loop to create different time blocks
// change class on each segment based on current time minus block time
// event listener on save saveButton
// store input into locals Storage

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Ensure HTML has been parsed.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
