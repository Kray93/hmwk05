// global variables
var textArea = $("textarea");
var saveBtns = $(".saveBtn");

var listItems = JSON.parse(localStorage.getItem("listItems") || "{}");

// add date to page and console log
var currentDate = dayjs().format('MMMM DD, YYYY')
$("#currentDay").text(currentDate)
console.log(currentDate);
// add hours for use in past/present/future css textarea colors and console log
var currentHour = dayjs().hour()
console.log(currentHour);

// test to see if jquery is working
$("#saveBtn1").on("click", function(){
    console.log("clicked");
});

// check LocalStorage
function first() {
    var storedInfo = JSON.parse(localStorage.getItem("userInfo"));

    // if/else 
    if (storedInfo !== null) {
        listItems = object.assign(storedInfo, listItems);
        // console.log(object); ???????????????????????????????????
    } else {
        return;
    }
};
// click event for save buttons
saveBtns.on("click", function () {
    var userText = $(this).prev().val();
    console.log(userText);
    var boxTime = $(this).prev().attr("data-time")
    listItems[boxTime] = userText;

    localStorage.setItem("listItems", JSON.stringify(listItems));
});
// function with if statements to identify colors of rows based on current hour
$.each((textArea), function () {
    var timeData = $(this).attr("data-time");
    console.log($(this));
    if (parseInt(timeData)===currentHour){
        $(this).removeClass("past future");
        $(this).addClass("present");
        // console.log(currentHour);
        // console.log(timeData);
    }
    if(timeData < currentHour){
        $(this).removeClass("present future");
        $(this).addClass("past");
        // console.log(currentHour);
        // console.log(timeData);
    }

    if(timeData > currentHour){
        $(this).removeClass("past present");
        $(this).addClass("future");
        // console.log(currentHour);
        // console.log(timeData);
    }
})