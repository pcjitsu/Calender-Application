//Start of day
var startDay = dayjs().startOf("day").add(7, "hour");

//get Current Hour
var currentHour = dayjs().format("H");
//Last Hour in WorkDay
var endOfWorkHours = 18;

//create empty schedule hour variable
var scheduleHour;
var timeStatus;
var timeDesc = "";
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
    //creating div block with all relevent information
    var appendBlock = `<div id="hour-${hour}" class="row time-block ${timeStatus}">
    <div class="col-md-1 hour">${hour}</div>
    <textarea class="col-md-10 description">${timeDesc}</textarea>
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
  //this being saved button, traversing up, then back down to appropriate value
  var timeBlock = $(this).parent().children().eq(1);
  var timeDesc = $(this).parent().children().eq(1).val();
  localStorage.setItem(timeBlock, timeDesc);
  console.log(timeBlock, timeDesc);
}

//Get HTML Loaded and Added Event Listner to Save Button
$(document).ready(function () {
  var saveButtonEl = $(".saveBtn");
  saveButtonEl.on("click", saveEvents);
});

createSchedule();
