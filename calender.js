
//display the current day
var timeDisplayEl = $('#currentDay');
function displayTime() {
  var current = moment().format('DD  MMM  YYYY');
  timeDisplayEl.text(current);
}

setInterval(displayTime, 1000);

//variables for now (as a baseline time, use moment) and HTML time block (to change color relative to now)
var timeBlock = $(".hour");
var now = moment().format("H");


$(document).ready(function () {
    if (localStorage["9:00am"] !== null && localStorage["9:00am"] !== undefined) {
      var hour1= $("<p>" + localStorage["9:00am"] + "</p>");
      $("#hour1").append(hour1[0].innerText);
    } else {
      ("");
    };
   if (localStorage["10:00am"] !== null && localStorage["10:00am"] !== undefined) {
      var hour2 = $("<p>" + localStorage["10:00am"] + "</p>");
      $("#hour2").append(hour2[0].innerText);
    } else {
      ("");
    };
    if (localStorage["11:00am"] !== null && localStorage["11:00am"] !== undefined) {
      var hour3 = $("<p>" + localStorage["11:00am"] + "</p>");
      $("#hour3").append(hour3[0].innerText);
    } else {
      (""); 
    };
    if (localStorage["12:00pm"] !== null && localStorage["12:00pm"] !== undefined) {
      var hour4 = $("<p>" + localStorage["12:00pm"] + "</p>");
      $("#hour4").append(hour4[0].innerText);
    } else {
      ("");
    };
    if (localStorage["1:00pm"] !== null && localStorage["1:00pm"] !== undefined) {
      var hour5 = $("<p>" + localStorage["1:00pm"] + "</p>");
      $("#hour5").append(hour5[0].innerText);
    } else {
      ("");
    };
      if (localStorage["2:00pm"] !== null && localStorage["2:00pm"] !== undefined) {
        var hour6 = $("<p>" + localStorage["2:00pm"] + "</p>");
        $("#hour6").append(hour6[0].innerText);
      } else {
        ("");
      };
      if (localStorage["3:00pm"] !== null && localStorage["3:00pm"] !== undefined) {
        var hour7 = $("<p>" + localStorage["3:00pm"] + "</p>");
        $("#hour7").append(hour7[0].innerText);
      } else {
        (""); 
      };
      if (localStorage["4:00pm"] !== null && localStorage["4:00pm"] !== undefined) {
        var hour8 = $("<p>" + localStorage["4:00pm"] + "</p>");
        $("#hour8").append(hour8[0].innerText);
      } else {
        (""); 
      };
      if (localStorage["5:00pm"] !== null && localStorage["5:00pm"] !== undefined) {
        var hour9 = $("<p>" + localStorage["5:00pm"] + "</p>");
        $("#hour9").append(hour9[0].innerText);
      } else {
        ("");
      };
    });

    //text area, class = "event"; if Save button clicked, set item to local storage and persist; upon refresh, need to get item from local storage too

$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});

//function to check each hour block to see if it is past (gray), present (red), or future (green).
$.each(timeBlock, function (i, hour) {
  var hour = parseInt($(this).attr("id"));
  if (hour == now) {
    $(this).next().addClass("present");
  } else if (hour < now) {
    $(this).next().addClass("past");
  } else if (hour > now) {
    $(this).next().addClass("future");
  }
});