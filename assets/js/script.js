var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("currentDate").innerHTML = today;
var textArea = document.querySelector(".description1")
var buttons = document.querySelector(".saveBtn")
var setHour = today.getHours
const rows = document.getElementsByClassName(".row");

$(".row").on("click", "textarea", function() {
    console.log("textarea was clicked");
    console.log(rows)
    var text = $(this)
        .text()
        .trim()
    var textInput = $("<textarea>")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

var saveLocalStorage = function () {
    var textArea1 = textArea.value
    console.log(textArea.value)
    localStorage.setItem("1", textArea1)
}

$(".saveBtn").on("click", function() {
    const list_task = $(this).prev();
    const textAreaIndex = list_task.data('hour');
    localStorage.setItem(textAreaIndex, list_task.val());
    //.,getItem(1)
    //compare the above with the current hour (use momentum to get the current hour)
    //if equal to current hour, apply current hour css to task
});
buttons.addEventListener("click", saveLocalStorage)