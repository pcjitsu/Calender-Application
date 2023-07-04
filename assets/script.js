//Start of day
var startDay = dayjs().startOf("day").add(7, "hour");

//get Current Hour
var currentHour = dayjs().format("H");
//Last Hour in WorkDay
var endOfWorkHours = 18;

//create empty schedule hour variable
var scheduleHour;
var timeStatus;

// Get Current Time and Display
var currentTime = dayjs().format("D/MM/YYYY/HA");
$("#currentDay").text(currentTime);

//Create Loop That Fills Out Scheduler from 9AM
function createSchedule() {
  for (var hour = 9; hour < endOfWorkHours; hour++) {
    //Checks to see what timeStatus is to put appropriate color highlight
    if (currentHour == hour) {
      timeStatus = "present";
    } else if (currentHour < hour) {
      timeStatus = "past";
    } else {
      timeStatus = "future";
    }

    var appendBlock = `<div id="hour-${hour}" class="row time-block ${timeStatus}">
    <div class="col-md-1 hour">${hour}</div>
    <textarea class="col-md-10 description"></textarea>
    <button class="btn saveBtn col-md-1" aria-label="save">
        <i class="fas fa-save"></i>
    </button>
</div>`;
    //appends block to parent container during each loop
    $(".container-lg").append(appendBlock);
  }
}

//Function save information when placed into textfield
function saveEvents() {
  console.log($(this).parent());
  var timeBlock = $(this).parent();
  var timeDesc = $(this).parent();

  localStorage.setItem(timeBlock, timeDesc);
  console.log(localStorage.getItem(timeBlock));
}
createSchedule();

//Get HTML Loaded and Added Event Listner to Save Button
$(document).ready(function () {
  var saveButtonEl = $(".saveBtn");
  saveButtonEl.on("click", saveEvents);
});
