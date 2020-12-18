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

// TODO: z index each tab to bring forward with mouse hover/click
// $(".row").on("mouseover", function(){
//     $(this).style.background-color: green;
//     $(this).css("z-index", "10")
//     // console.log(this);
// })
// first()

// for (i = 8; i <= 17; i++) {
//     var objectValues = listItems["saveBtn"+i];
//     var buttonId = saveBtns[i];
//     var areaId = $(textArea)[i];
//     // areaId.text(objectValues)
// };

// check LocalStorage
function first() {
    var storedInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (storedInfo !== null) {
        listItems = object.assign(storedInfo, listItems);
    } else {
        return;
    }
};

saveBtns.on("click", function () {
    var userText = $(this).prev().val();
    console.log(userText);
    var boxTime = $(this).prev().attr("data-time")
    listItems[boxTime] = userText;

    localStorage.setItem("listItems", JSON.stringify(listItems));
});

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
// $("#input"+i)
// $(".row")

// CHECK FOR LOCAL DATA
//get stored scores from localStorage
//if info retrieved from local, update local array

// SAVE CURRENT TEXT OF INPUT FIELD
// element variable for text area of clicked button
// element variable for the id of the button clicked
// update inputObj at matching key value
// stringify and save inputbObj locally after udpating
// check time vs textarea data-time





// localStorage.setItem(userInput)