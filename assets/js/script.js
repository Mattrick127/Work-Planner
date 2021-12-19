var myMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(myMoment)
var display = $('#currentDay');
display.text(myMoment);

var textArea = document.querySelector(".description")
var buttons = document.querySelector(".saveBtn")
const rows = document.getElementsByClassName(".row");

$(".saveBtn").on("click", "textarea", function() {
    var text = $(this)
        .text()
        .trim()
    var textInput = $("<textarea>")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    localStorage.setItem(textInput)
});


// buttons.addEventListener("click", saveLocalStorage)
// loadLocalStorage();